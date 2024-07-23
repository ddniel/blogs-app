"use client";

import { deletePost } from "@/lib/actions";
import { useRouter } from "next/navigation";

interface DeleteProps {
  id: number;
}

export default function Delete({ id }: DeleteProps) {
  const router = useRouter();

  const handleDelete = async () => {
    const result = await deletePost(id);
    if (result.message === "OK") {
      router.refresh();
    }
  };
  return (
    <button
      onClick={handleDelete}
      className="px-3 py-1 border border-neutral-200 rounded-xl hover:bg-foreground hover:text-background"
    >
      Delete
    </button>
  );
}
