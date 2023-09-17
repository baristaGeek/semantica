'use client'

import React, { useState } from 'react'

import type Parser from 'web-tree-sitter'

// const Parser = require('web-tree-sitter');


export default async function Home() {
  const ParserImpl = require('web-tree-sitter') as typeof Parser
  // await Parser.init({
  //   locateFile(scriptName: string, scriptDirectory: string) {
  //     return scriptName;
  //   },
  // });

  await ParserImpl.init()

  const [snippet, setSnippet] = useState("");

  const parser = new ParserImpl();
  const JavaScript = await ParserImpl.Language.load('tree-sitter-javascript.wasm');
  parser.setLanguage(JavaScript);

  function parseCodeSemantics (snippet: string) {
    console.log("snippet to parse: ", snippet)

    const tree = parser.parse(snippet);
    console.log(tree.rootNode.toString());
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div className="z-10 mx-auto max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Paste a block of code to run a&nbsp;
          <code className="font-mono font-bold">semantic search</code>
        </p>
      </div>

      <textarea 
        value = {snippet}
        onChange={e => setSnippet(e.target.value)}
        // className="px-4 py-20 w-96 border border-gray-300 rounded resize-none" 
        className="px-4 mt-10 mb-10 border-gray-300 h-96 w-full bg-black font-roboto text-white rounded"
      />
    
      <button 
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
        onClick={(e) => {
          parseCodeSemantics(snippet);
        }}
      >
        Run Semantica
      </button>
    </main>
  );
}
