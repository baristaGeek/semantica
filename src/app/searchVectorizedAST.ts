import { pipeline } from "@xenova/transformers";
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!, 
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default async function searchVectorizedAST(ast: string): Promise<{
    data: any
  }> {
    const generateEmbedding = await pipeline(
      "feature-extraction",
      "Supabase/gte-small"
    );

  // // Generate a vector using Transformers.js
  const output = await generateEmbedding(ast, {
    pooling: "mean",
    normalize: true,
  });

  // // Extract the embedding output
  const embedding = Array.from(output.data);

  const { data: documents } = await supabase.rpc('match_documents', {
    query_embedding: embedding, // Pass the embedding you want to compare
    match_threshold: 0.9, // Choose an appropriate threshold for your data
    match_count: 10, // Choose the number of matches
  })

  console.log("closestMatch: ", documents);

  return documents[0].content;
  
};
