import { Suspense } from "react";
import { Form } from "./components/form";
import { Content } from "./content";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-zinc-900 text-zinc-100">
      <h2 className="text-3xl font-semibold mb-10">Server-side fetching</h2>

      <Form />

      <Suspense fallback={<div>loading...</div>}>
        <Content />
      </Suspense>
    </main>
  );
}
