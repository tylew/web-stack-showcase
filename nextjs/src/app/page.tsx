// app/page.tsx

import Link from 'next/link';
import Box from '../components/Box';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <Box width="w-full max-w-[500px]">
        <h1 className="text-2xl font-bold flex flex-wrap items-center justify-center">
          <span className="whitespace-nowrap">Web-dev showcase /</span>
          <span className="whitespace-nowrap ml-2">Personal website</span>
        </h1>
        <p className="mt-2 ">
          hm
        </p>
        <Link href="/blog" className="mt-4 inline-block text-blue-500 underline">
          Go to Blog
        </Link>
      </Box>
    </div>
  );
}
