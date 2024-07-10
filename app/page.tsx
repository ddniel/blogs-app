import Header from "@/components/header";
import Posts from "@/components/posts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <section>
        <Posts />
      </section>
    </main>
  );
}
