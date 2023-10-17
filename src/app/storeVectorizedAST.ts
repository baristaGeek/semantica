import { pipeline } from "@xenova/transformers";
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!, 
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)


export default async function storeVectorizedAST(body: string): Promise<void> {
  const generateEmbedding = await pipeline(
    "feature-extraction",
    "Supabase/gte-small"
  );

  // Generate a vector using Transformers.js
  const output = await generateEmbedding(body, {
    pooling: "mean",
    normalize: true,
  });

  // Extract the embedding output
  const embedding = Array.from(output.data);

  // Store the vector in Postgres
  const { data, error } = await supabase.from("documents").insert({
    body,
    embedding,
  });
};
