import { getMostVisitedPosts } from "@/lib/actions";
import Card from "./ui/card";

interface Post {
  id: number;
  title: string;
  content: string;
  created_at: Date;
  image_url: string;
}

export default async function TrendigPosts() {
  const posts: Post[] = await getMostVisitedPosts();

  if (!posts || posts.length === 0) {
    return <div>No posts found.</div>;
  }
  return (
    <div className="mt-10">
      <h2 className="mb-2">Trending</h2>
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
