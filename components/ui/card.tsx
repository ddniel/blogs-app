import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export default async function Card() {
  // const { status } = useSession();
  // const loggedin = status === "authenticated";
  // console.log(status);
  const session = await getServerSession(authOptions);

  return (
    <div className="w-[400px] h-[350px] flex flex-col border border-neutral-200 rounded-xl px-10 py-5 gap-2 relative">
      <h3 className="text-2xl">Title</h3>
      <div className="h-[2px] w-full bg-neutral-100"></div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At quas sed in
        nemo, quod, magnam magni eius temporibus eos, voluptas voluptates? At
        provident consequatur distinctio dolorum eveniet unde? Saepe, ab.
      </p>
      <span className="text-xs italic text-neutral-500 mt-4">
        Published: July 14, 2024
      </span>
      <div className="self-end absolute bottom-6 flex gap-1">
        {session && (
          <button className="px-3 py-1 border border-neutral-200 rounded-xl hover:bg-foreground hover:text-background">
            Delete
          </button>
        )}

        {session && (
          <button className="px-3 py-1 border border-neutral-200 rounded-xl hover:bg-foreground hover:text-background">
            Edit
          </button>
        )}

        <button className="px-3 py-1 border border-neutral-200 rounded-xl hover:bg-foreground hover:text-background">
          Read
        </button>
      </div>
    </div>
  );
}
