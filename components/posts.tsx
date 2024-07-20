import { getAllPosts } from "@/lib/data";
import Card from "./ui/card";

export default async function Posts() {
  const posts = await getAllPosts();

  return (
    <div className="grid grid-cols-3 gap-5 py-32 px-20">
      {posts.map((post, index) => {
        return (
          <div key={index}>
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
