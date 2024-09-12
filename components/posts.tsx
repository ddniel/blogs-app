import { getFilteredPosts } from "@/lib/data";
import Card from "./ui/card";
import { useSearchParams } from "next/navigation";
import SearchBar from "./ui/searchBar";
import { Suspense } from "react";

interface Post {
  id: number;
  title: string;
  content: string;
  created_at: Date;
  image_url: string;
}

export default async function Posts({ searchInput }: { searchInput: string }) {
  const search = searchInput || "";

  // const posts: Post[] = await getAllPosts();
  const posts: Post[] = await getFilteredPosts(search);

  return (
    <>
      <div className="w-full flex flex-col sm:flex-row justify-between mb-4 gap-4">
        <h2 className="">All Posts</h2>
        <Suspense>
          <SearchBar />
        </Suspense>
      </div>
      <hr />
      {posts.length > 0 ? (
        <div className="grid sm:grid-cols-3 gap-5 w-full mt-8">
          {posts &&
            posts.map((post, id) => {
              return (
                <div key={id}>
                  <Card
                    id={post.id}
                    title={post.title}
                    content={post.content}
                    date={post.created_at.toString()}
                    image_url={post.image_url}
                  />
                </div>
              );
            })}
        </div>
      ) : (
        <p className="mt-4">No posts found.</p>
      )}
    </>
  );
}
