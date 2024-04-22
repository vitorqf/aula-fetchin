"use client";

import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function Content() {
  const {
    data: posts,
    error,
    isLoading,
  } = useSWR(`http://localhost:3000/posts`, fetcher, {
    compare: (a, b) => {
      return a === b;
    },
  });

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <ul className="pt-10 mt-10 w-full border-t-2 border-zinc-700">
      {posts.map((post: any) => {
        return (
          <li key={post.id} className="flex items-center gap-4">
            <p>{post.id}.</p>
            <h2 className="text-xl font-bold">{post.title}</h2>
          </li>
        );
      })}
    </ul>
  );
}
