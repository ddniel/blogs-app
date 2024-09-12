import { getLatestPosts } from "@/lib/actions";
import Card from "./ui/card";
import { IoNotifications } from "react-icons/io5";

interface Post {
  id: number;
  title: string;
  content: string;
  created_at: Date;
  image_url: string;
}

export default async function LatestPosts() {
  const posts: Post[] = await getLatestPosts();

  if (!posts || posts.length === 0) {
    return <div>No posts found.</div>;
  }
  return (
    <div>
      <h2 className="mb-2 inline-block">Latest Posts </h2>
      <div className="relative inline-block px-2 pt-2">
        <IoNotifications className="text-2xl" />
        <div className="rounded-full absolute top-1 right-1 bg-red-600 w-4 h-4 flex items-center justify-center text-xs text-white">
          1
        </div>
      </div>
      <hr />
      <div className="grid sm:grid-cols-2 gap-5 w-full mt-8">
        {posts.map((post, id) => {
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
    </div>
  );
}
