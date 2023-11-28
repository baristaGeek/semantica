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

  const parserRef = React.useRef<Parser>();

  React.useEffect(() => {
    if (typeof window === undefined) {
      console.log("SSR");
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
    console.log("rootNode:", tree.rootNode);

    setAST(tree);
  }, [code, isReady]);

  return (
    <div>
      <h1 className="p-2 text-4xl">Tree Sitter Test</h1>

      <div className="flex-cole flex h-96 gap-1 p-1">
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
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-2 mb-2"
          onClick={() => {
            if (AST?.rootNode) {
              // storeVectorizedAST(code)
              console.log(
                "code to store: ",
                code,
                "ast to store: ",
                AST.rootNode.toString()
              );
              storeVectorizedAST(code, AST.rootNode.toString());
            }
          }}
        >
          Store Code Vector
        </button>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-2 mb-2"
          onClick={() => {
            if (AST?.rootNode) {
              // storeVectorizedAST(code)
              console.log(
                "code to search: ",
                code,
                "ast to searh: ",
                AST.rootNode.toString()
              );
              searchVectorizedAST(AST.rootNode.toString()).then((res) => {
                // alert(`search result:  ${res.data[0].body}`);
                // alert(res.data[0].body);
                // console.log("result: ", res[0].content);
                alert(res);
              }
              );
            }
          }}
        >
          Semantic Code Search
        </button>
      </div>
    </div>
  );
}
