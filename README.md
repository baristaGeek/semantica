# Semantica: Semantic Code Search Using Vectorized Abstract Syntax Trees 
Wouldn't it be cool to use vector DBs to search for semantically (not synactically) similar code in the public domain? 

___For real?___ 

It's not a game changer or anything. This is just a fun experiment that I built to get familiarized with Tree-sitter and pgvector :) There's still a lot of room for improvement to achieve high accuracy. This is not productized, this was just an intellectual escapade. 

## Instructions to run 
1. Use node 18 and run npm install
2. Go to your supabase dashboard and get the 2 environment variables that you need on your .env file. Thos are:

```bash
NEXT_PUBLIC_SUPABASE_URL=YOUR_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_API_KEY
```

## Demo
Semantica works with 2 very basic functionalities:
1. You Save a code snippet to the DB. This codebase is now searchable by other users. 
2. You retrieve the most semantically similar code snippets from the DB, given a snippet of your own.

Behinds the scenes, Semantica:
1. Converts the code snippet to a vectorized AST using Tree-sitter. Right now JS is the only language for which Semantica has a grammar. 
2. Normalizes and stores the vectorized AST. 
3. Uses dot product to search for the code snippets with the most similar embeddings. The match threshold is 0.9.

For example, you can add two numbers with the addition operator or by using an array and reducing it. They are syntactically different but semantically similar snippets that Semantica matches. 


https://github.com/baristaGeek/semantica/assets/8325094/4c294845-3312-457d-a8dc-c0c6461fe139


## Material that was useful to build this 
- [How to install Tree-sitter on a NextJS project](https://stackoverflow.com/questions/77123807/how-to-add-web-tree-sitter-to-a-nextjs-project)
- [What are embeddings?](https://supabase.com/docs/guides/ai/concepts#what-are-embeddings)
- [Measuring Similarity From Embeddings](https://developers.google.com/machine-learning/clustering/similarity/measuring-similarity)
