import { getPostById } from "@/lib/data";
import formatDate from "@/lib/utils";
import Link from "next/link";

export default async function Post({ params }) {
  const post = await getPostById(params.id);

  return (
    <section>
      <article>
        <h1>{post.title}</h1>
        <p>{formatDate(post.created_at)}</p>
        <p>{post.content}</p>
      </article>
      <Link href={"/"}>Back to Home</Link>
    </section>
  );
}
