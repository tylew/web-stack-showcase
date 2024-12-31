"use client";

import Link from "next/link";

export default function BlogIndexPage() {
  // In a real scenario, you might fetch a list of posts from an API or database.
  const posts = [
    { slug: "hello-world", title: "Hello World Post" },
    { slug: "nextjs-tips", title: "Next.js Tips & Tricks" },
  ];

  return (
    <main style={{ padding: "2rem" }}>
      <h2>Blog Index</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <p>
        <Link href="/">Back to Home</Link>
      </p>
    </main>
  );
}
