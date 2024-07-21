import formatDate from "@/lib/utils";
import Link from "next/link";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Delete from "./delete";

export default async function Card({ id, title, content, date }) {
  const session = await getServerSession(authOptions);

  return (
    <div className="w-[400px] h-[350px] flex flex-col border border-neutral-200 rounded-xl px-10 py-5 gap-2 relative">
      <h3 className="text-2xl">{title}</h3>
      <div className="h-[2px] w-full bg-neutral-100"></div>
      <p>{content.substring(0, 250)}...</p>
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
          <Link href={`/edit/${id}`}>
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
