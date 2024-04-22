"use server";

import { revalidatePosts } from "./fetch-posts";

export async function createPost(formData: FormData) {
  try {
    const title = formData.get("title");

    const response = await fetch("http://localhost:3000/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        views: 100,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const data = await response.json();

    revalidatePosts();

    return data;
  } catch (error) {
    throw new Error("Failed to create post");
  }
}
