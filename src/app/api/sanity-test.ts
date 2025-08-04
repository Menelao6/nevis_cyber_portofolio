// src/app/api/sanity-test/route.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { client } from '../../sanity/lib/client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const docs = await client.fetch(groq`*[_type == "writeup"]{_id, title}`)
    res.status(200).json({ count: docs.length, docs })
  } catch (err: any) {
    console.error('💥 sanity-test error:', err)
    res.status(500).json({ error: err.message })
  }
}