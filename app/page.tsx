import Footer from "@/components/footer";
import Header from "@/components/header";
import Posts from "@/components/posts";

export default function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  return (
    <main className="flex min-h-screen flex-col relative">
      <Header />
      <section>
        <Posts searchInput={searchParams?.query || ""} />
      </section>
      <Footer />
    </main>
  );
}
