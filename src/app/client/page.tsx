import { Form } from "../components/form";
import { Content } from "./content";

export default function Client() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-zinc-900 text-zinc-100">
      <h2 className="text-3xl font-semibold mb-10">Client fetching</h2>
      <Form />
      <Content />
    </main>
  );
}
