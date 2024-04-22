"use client";

import { createPost } from "@/actions/create-post";

export function Form() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    try {
      await createPost(formData);
      form.reset();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 flex flex-col">
      <label htmlFor="title">Título</label>
      <input
        type="text"
        name="title"
        className="bg-zinc-800 border border-zinc-700 mt-2 p-2 rounded"
        placeholder="Digite um titulo para o post"
      />

      <button
        type="submit"
        className="bg-purple-500 px-4 py-2 mt-2 rounded border border-transparent hover:bg-purple-600 active:bg-purple-700"
      >
        Criar post
      </button>
    </form>
  );
}
