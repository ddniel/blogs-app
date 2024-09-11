import SideBar from "@/components/sideBar";
import { getPostById } from "@/lib/data";
import formatDate from "@/lib/utils";
import Link from "next/link";
import { notFound } from "next/navigation";
import DOMPurify from "isomorphic-dompurify";
import Image from "next/image";

interface PostProps {
  params: {
    id: number;
  };
}

export default async function Post({ params }: PostProps) {
  const post = await getPostById(params.id);

  if (!post) {
    notFound();
  }

  const formattedContent = await post.content
    .split("\n")
    .map(
      (paragraph: string) => `<p>${paragraph ? paragraph.trim() : "<br />"}</p>`
    )
    .join("");

  const cleanContent = await DOMPurify.sanitize(formattedContent);

  return (
    <section className="px-2 sm:px-16 flex flex-col md:flex-row gap-10">
      <article className="md:w-[70%]">
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
          {post.image_url && (
            <Image
              src={post.image_url}
              priority={false}
              alt={post.title}
              width={800}
              height={500}
              className="w-full h-[500px] object-cover"
            />
          )}
          <div
            className="mt-10"
            dangerouslySetInnerHTML={{ __html: cleanContent }}
          ></div>
        </div>
      </article>
      <SideBar />
    </section>
  );
}
