import SideBar from "@/components/sideBar";
import { getPostById } from "@/lib/data";
import formatDate from "@/lib/utils";
import Link from "next/link";

interface PostProps {
  params: {
    id: number;
  };
}

export default async function Post({ params }: PostProps) {
  const post = await getPostById(params.id);

  return (
    <section className="px-28 flex gap-10">
      <article className="w-[70%]">
        <div>
          <Link href={"/"} className="cursor-pointer">
            ⇦ Back to Home
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl mt-10">{post.title}</h1>
          <p className="italic text-sm text-[#959595]">
            Published date: {formatDate(post.created_at)}
          </p>
          <p className="mt-10">{post.content}</p>
        </div>
      </article>
      <SideBar />
    </section>
  );
}
