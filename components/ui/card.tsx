import formatDate from "@/lib/utils";
import Link from "next/link";
import Delete from "./delete";
import { isLoggedIn } from "@/lib/auth";

interface CardProps {
  id: number;
  title: string;
  content: string;
  date: string;
}

export default async function Card({ id, title, content, date }: CardProps) {
  // const session = await getServerSession();
  const session = await isLoggedIn();

  return (
    <div className="w-[400px] h-[350px] flex flex-col border border-neutral-200 rounded-xl px-10 py-5 gap-2 relative">
      <h3 className="text-2xl">{title}</h3>
      <div className="h-[2px] w-full bg-neutral-100"></div>
      <p>{content.slice(0, 170)}...</p>
      <span className="text-xs italic text-neutral-500 mt-4">
        Published: {formatDate(date)}
      </span>
      <div className="self-end absolute bottom-6 flex gap-1">
        {session && (
          // <button className="px-3 py-1 border border-neutral-200 rounded-xl hover:bg-foreground hover:text-background">
          //   Delete
          // </button>
          <Delete id={id} />
        )}

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
