import formatDate from "@/lib/utils";
import Link from "next/link";
import Delete from "./delete";
import { isLoggedIn } from "@/lib/auth";
import Image from "next/image";

interface CardProps {
  id: number;
  title: string;
  content: string;
  date: string;
  image_url: string;
}

export default async function Card({
  id,
  title,
  content,
  date,
  image_url,
}: CardProps) {
  // const session = await getServerSession();
  const session = await isLoggedIn();

  return (
    <div className="w-full sm:w-[400px] h-[460px] flex flex-col border border-neutral-200 sm:rounded-xl px-4 sm:px-10 py-5 gap-2 relative shadow-md">
      {image_url && (
        <Image
          src={image_url}
          alt={title}
          priority={false}
          width={800}
          height={500}
          className="w-full h-[200px] object-cover sm:rounded-sm"
        />
      )}
      <h3 className="text-2xl">
        {title.slice(0, 42)}
        {title.length > 42 && "..."}
      </h3>

      <div className="h-[2px] w-full bg-neutral-100"></div>
      <span className="text-xs italic text-neutral-500">
        Published: {formatDate(date)}
      </span>
      <p>{content.slice(0, 70)}...</p>

      <div className="self-end absolute bottom-6 flex gap-1">
        {session && <Delete id={id} />}

        {session && (
          <Link href={`/posts/edit/${id}`}>
            <button className="px-3 py-1 border border-neutral-200 rounded-xl hover:bg-foreground hover:text-background">
              Edit
            </button>
          </Link>
        )}

        <Link href={`/posts/${id}`}>
          <button className="px-3 py-1 border border-neutral-200 rounded-xl hover:bg-foreground hover:text-background">
            Read
          </button>
        </Link>
      </div>
    </div>
  );
}
