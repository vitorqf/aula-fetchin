import { fetchPosts } from "@/actions/fetch-posts";

export async function Content() {
  const posts = await fetchPosts();

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
