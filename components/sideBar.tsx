import { getLatestPosts } from "@/lib/actions";
import Link from "next/link";

interface Post {
  id: number;
  title: string;
  content: string;
  created_at: Date;
  image_url: string;
}

export default async function SideBar() {
  const posts: Post[] = await getLatestPosts();

  return (
    <div className="flex flex-col border border-neutral-200 rounded-xl px-8 py-5 mt-10 shadow-md">
      <div>
        <h2 className="text-xl">🎉 Latest</h2>
        <hr className="mt-2 mb-4" />
        <div>
          <ul>
            {posts.map((post, id) => {
              return (
                <li key={id}>
                  <Link className="hover:underline" href={`/posts/${post.id}`}>
                    {post.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="mt-4">
        <h2 className="text-xl">🏷️ Tags</h2>
        <hr className="mt-2 mb-4" />
        <div className="border border-neutral-200 rounded-xl px-2 py-5 mt-6 min-h-[150px] w-full">
          <span className=" border text-sm border-neutral-200 rounded-xl px-2 py-2 hover:bg-foreground hover:text-background cursor-pointer mx-1">
            # Science
          </span>
          <span className="border text-sm border-neutral-200 rounded-xl px-2 py-2 hover:bg-foreground hover:text-background cursor-pointer mx-1">
            # tech
          </span>
        </div>
      </div>
      <div className="mt-4">
        <hr className="mt-2 mb-4" />
        <Link href={"/posts/all"}>Search All Posts</Link>
      </div>
    </div>
  );
}
