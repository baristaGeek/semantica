"use client";

import React from "react";
import Parser from "web-tree-sitter";

import storeVectorizedAST from "./clientStoreVectorizedAST";
import searchVectorizedAST from "./searchVectorizedAST";

const exampleCode = `
const MyComp = () => {
  const [count, setCount] = React.useState(0)
  return (
    <div>
      <h1 className="text-4xl">Hello World</h1>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <p>Count: {count}</p>
    </div>
  )
}
`;

export default function TreeSitterTest() {
  const [isReady, setIsReady] = React.useState(false);
  const [code, setCode] = React.useState(exampleCode);
  const [AST, setAST] = React.useState<Parser.Tree | null>(null);
  const [searchResults, setSearchResults] = React.useState<any>([]);

  const parserRef = React.useRef<Parser>();

  React.useEffect(() => {
    if (typeof window === undefined) {
      return;
    }
    (async () => {
      await Parser.init({
        locateFile(scriptName: string, scriptDirectory: string) {
          return scriptName;
        },
      });

      const parser = new Parser();
      const Lang = await Parser.Language.load("tree-sitter-javascript.wasm");

      setIsReady(true);

      parser.setLanguage(Lang);

      parserRef.current = parser;
    })();
  }, []);

  React.useEffect(() => {
    if (!isReady) return;
    if (!parserRef.current) return;

    const tree = parserRef.current.parse(code);

    setAST(tree);
  }, [code, isReady]);

  return (
    <div>
      <h1 className="p-2 text-4xl">Semantica</h1>

      <div className="flex-cole flex h-64 gap-1 p-1">
        <textarea
          className="rounder-sm flex-1 overflow-auto whitespace-pre-wrap border border-gray-300 p-2"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <div className="rounder-sm flex-1 overflow-auto whitespace-pre-wrap border border-gray-300 p-2">
          {AST?.rootNode?.toString()}
        </div>
      </div>

      <div className="flex justify-center">
        <button
          className="bg-gradient-to-r from-purple-400 to-fuchsia-500 text-white font-bold py-2 px-4 rounded mt-2 mb-2 drop-shadow-[0_0_5px_rgba(255,255,255,0.7)] hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]"
          onClick={() => {
            if (AST?.rootNode) {
              storeVectorizedAST(code, AST.rootNode.toString());
            }
          }}
        >
          Store Code Vector
        </button>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-gradient-to-r from-purple-400 to-fuchsia-500 text-white font-bold py-2 px-4 rounded mt-2 mb-2 drop-shadow-[0_0_5px_rgba(255,255,255,0.7)] hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]"
          onClick={() => {
            if (AST?.rootNode) {
              searchVectorizedAST(AST.rootNode.toString()).then((res) => {
                setSearchResults(res);
              });
            }
          }}
        >
          Semantic Code Search
        </button>
      </div>

      <div>
        {searchResults.length > 0 && (
          <div className="bg-gray-100 p-4 rounded-md">
            <h2 className="text-lg font-medium text-gray-800">
              Most Similar Match
            </h2>
            <p className="text-gray-700">{searchResults}</p>
          </div>
        )}
      </div>
    </div>
  );
}
