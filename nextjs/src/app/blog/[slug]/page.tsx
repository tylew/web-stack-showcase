// app/blog/[slug]/page.tsx

import { notFound } from 'next/navigation';

interface BlogPost {
  title: string;
  content: string;
}

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

async function getPostData(slug: string): Promise<BlogPost | null> {
  // Replace this mock data with actual data fetching logic, such as fetching from an API or database.
  const mockPosts: { [key: string]: BlogPost } = {
    'hello-world': {
      title: 'Hello World Post',
      content: 'This is the content for the "hello-world" blog post.',
    },
    'nextjs-tips': {
      title: 'Next.js Tips & Tricks',
      content: 'This is the content for the "nextjs-tips" blog post.',
    },
  };

  return mockPosts[slug] || null;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;
  const post = await getPostData(slug);

  if (!post) {
    // Optionally, you can redirect to a 404 page or show a custom "Not Found" message
    notFound();
  }

  return (
    <main style={{ padding: '2rem' }}>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>
        <a href="/blog">Back to Blog</a>
      </p>
    </main>
  );
}
