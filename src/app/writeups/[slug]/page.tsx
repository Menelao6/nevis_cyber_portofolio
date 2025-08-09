import { getClient } from '../../../sanity/lib/sanity';
import { groq } from 'next-sanity';
import WriteupDetail from '../../components/WriteupDetail/WriteupDetail';
import { notFound } from 'next/navigation';

const fetchOptions = {
  next: { revalidate: 30 }
};

export async function generateStaticParams() {
  const client = getClient(false);
  const writeups = await client.fetch(groq`
    *[_type == "writeup" && defined(slug.current)] {
      "slug": slug.current
    }
  `, {}, fetchOptions);

  return writeups.map((writeup: any) => ({
    slug: writeup.slug,
  }));
}

export default async function WriteupPage({
  params,
}: {
  params: { slug: string };
}) {
  const client = getClient(false);
  const writeup = await client.fetch(
    groq`
      *[_type == "writeup" && slug.current == $slug][0] {
        _id,
        title,
        "slug": slug.current,
        publishedAt,
        excerpt,
        coverImage,
        competition,
        points,
        content,
        categories[]->{title},
        author[]->{name}
      }
    `,
    { slug: params.slug },
    fetchOptions
  );

  if (!writeup) {
    notFound();
  }

  return <WriteupDetail writeup={writeup} />;
}