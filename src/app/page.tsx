'use client'

import React, { useState } from 'react'

export default function Home() {

  const [snippet, setSnippet] = useState("");

  function parseCodeSemantics (snippet: string) {
    console.log("snippet to parse: ", snippet)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 mx-auto max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Paste a block of code to run a&nbsp;
          <code className="font-mono font-bold">semantic search</code>
        </p>
      </div>

      <textarea 
        value = {snippet}
        onChange={e => setSnippet(e.target.value)}
        className="px-4 py-20 w-96 border border-gray-300 rounded resize-none" 
      />
    
      <button 
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
        onClick={(e) => {
          parseCodeSemantics(snippet);
        }}
      >
        Set Snippet
      </button>
    </main>
  );
}
