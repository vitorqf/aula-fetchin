"use server";

import { revalidateTag } from "next/cache";

export async function fetchPosts() {
  try {
    const response = await fetch(`http://localhost:3000/posts`, {
      next: { tags: ["posts"] },
      cache: "force-cache",
    });
    const posts = await response.json();
    return posts;
  } catch (error) {
    throw new Error("Failed to fetch posts");
  }
}

export async function revalidatePosts() {
  revalidateTag("posts");
}
