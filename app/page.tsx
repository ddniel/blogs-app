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
      <Suspense>
        <Header />
        <section>
          <Posts searchInput={searchParams?.query || ""} />
        </section>
      </Suspense>
    </main>
  );
}
