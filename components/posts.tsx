import { getAllPosts, getFilteredPosts } from "@/lib/data";
import Card from "./ui/card";
import { useSearchParams } from "next/navigation";

interface Post {
  id: number;
  title: string;
  content: string;
  created_at: Date;
}

export default async function Posts({ searchInput }: { searchInput: string }) {
  const search = searchInput || "";

  // const posts: Post[] = await getAllPosts();
  const posts: Post[] = await getFilteredPosts(search);

  if (!posts || posts.length === 0) {
    return <div>No posts found.</div>;
  }

  return (
    <div className="grid grid-cols-3 gap-5 py-32 px-20">
      {posts.map((post, id) => {
        return (
          <div key={id}>
            <Card
              id={post.id}
              title={post.title}
              content={post.content}
              date={post.created_at.toString()}
            />
          </div>
        );
      })}
    </div>
  );
}
