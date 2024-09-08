import { getAllPosts } from "@/lib/data";
import Link from "next/link";

export default async function SideBar() {
  const posts = await getAllPosts();

  return (
    <div className="flex flex-col border w-[30%] border-neutral-200 rounded-xl px-8 py-5 mt-10">
      <div>
        <h2 className="text-xl">🎉 Latest</h2>
        <hr className="mt-2 mb-4" />
        <div>
          <ul>
            <li>
              <Link className="hover:underline" href={`/posts/${posts[0].id}`}>
                {posts[0].title}
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href={`/posts/${posts[1].id}`}>
                {posts[1].title}
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href={`/posts/${posts[2].id}`}>
                {posts[2].title}
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href={`/posts/${posts[3].id}`}>
                {posts[3].title}
              </Link>
            </li>
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
    </div>
  );
}
