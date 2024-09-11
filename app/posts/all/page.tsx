import Posts from "@/components/posts";

export default function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  return (
    <div className="flex min-h-screen flex-col relative">
      <section className=" sm:px-20">
        <Posts searchInput={searchParams?.query || ""} />
      </section>
    </div>
  );
}
