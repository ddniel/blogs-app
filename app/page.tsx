import Footer from "@/components/footer";
import Header from "@/components/header";
import LatestPosts from "@/components/latest-posts";
import Posts from "@/components/posts";
import SideBar from "@/components/sideBar";
import TrendigPosts from "@/components/trending-posts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative">
      <Header />
      <section className="py-10 sm:py-32 sm:px-20 flex flex-col sm:flex-row">
        <div className="sm:w-[70%] px-2 sm:pr-10">
          <LatestPosts />
          <TrendigPosts />
        </div>
        <SideBar />
      </section>
      <Footer />
    </main>
  );
}
