import { client } from '../../../sanity/lib/client';
import { groq } from 'next-sanity';
import WriteupDetail from '../../components/WriteupDetail/WriteupDetail';

export async function generateStaticParams() {
  const writeups = await client.fetch(groq`
    *[_type == "writeup"] {
      "slug": slug.current
    }
  `);

  return writeups.map((writeup: any) => ({
    slug: writeup.slug,
  }));
}

export default async function WriteupPage({
  params,
}: {
  params: { slug: string };
}) {
  const writeup = await client.fetch(
    groq`
      *[_type == "writeup" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        publishedAt,
        excerpt,
        coverImage,
        content,
        categories[]->{title}
      }
    `,
    { slug: params.slug }
  );

  if (!writeup) {
    return <div>Writeup not found</div>;
  }

  return <WriteupDetail writeup={writeup} />;
}