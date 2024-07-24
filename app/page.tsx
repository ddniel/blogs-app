import Header from "@/components/header";
import Posts from "@/components/posts";
import { Suspense } from "react";

export default function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <section>
        <Suspense>
          <Posts searchInput={searchParams?.query || ""} />
        </Suspense>
      </section>
    </main>
  );
}
