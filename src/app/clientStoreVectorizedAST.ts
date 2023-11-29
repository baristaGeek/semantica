// import { pipeline } from "@xenova/transformers";
import { pipeline } from '@xenova/transformers';
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!, 
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)


export default async function storeVectorizedAST(body: string, ast: string): Promise<void> {
  const generateEmbedding = await pipeline(
    "feature-extraction",
    "Supabase/gte-small"
  );

  // Generate a vector using Transformers.js
  const output = await generateEmbedding(ast, {
    pooling: "mean",
    normalize: true,
  });

  // Extract the embedding output
  const embedding = Array.from(output.data);

  // Get the latest id from the database
  const { data: latest } = await supabase
  .from('posts')
  .select('id')
  .order('id', { ascending: false })
  .limit(1)
  .single();

  // Generate next id
  const nextId = latest ? latest.id + 1 : 1; 

  // Store the vector in Postgres
  const { data, error } = await supabase.from("posts").insert({
    id: nextId,
    body,
    embedding,
  });

  alert (`Embedding stored!`);
};
