// Require modules at top rather than import
// const { pipeline } = require("@xenova/transformers");
import { pipeline } from "@xenova/transformers";
const { createClient } = require('@supabase/supabase-js')
import { NextResponse } from 'next/server'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY 
)

export default async function handler(req: any, res: any) {
  const { body, ast } = req.body;

  const generateEmbedding = await pipeline(
    "feature-extraction",
    "Supabase/gte-small"
  );

  const output = await generateEmbedding(ast, {
    pooling: "mean", 
    normalize: true
  });

  const embedding = Array.from(output.data);

  const { data, error } = await supabase
    .from('documents')
    .insert({
      body,
      embedding 
    })

    const result = {
      message: 'Vector stored!' 
    }

    return NextResponse.json(result)

}
