"use client";

import { createPost } from "@/lib/actions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateForm() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async () => {
    const result = await createPost(formData.title, formData.content);

    if (result.message === "Post created succesfully.") {
      router.push("/");
      router.refresh();
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form
        action={handleFormSubmit}
        className="flex flex-col border border-neutral-200 rounded-xl px-10 py-5 w-[800px] gap-8"
      >
        <h1 className="text-2xl">📑 Create Post</h1>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Post title..."
          value={formData.title}
          onChange={handleInputChange}
          className="w-full border border-neutral-200 rounded-xl px-10 py-5"
        />
        <textarea
          name="content"
          id="content"
          placeholder="Post content..."
          value={formData.content}
          onChange={handleInputChange}
          className="w-full h-[400px] border border-neutral-200 rounded-xl px-10 py-5 overflow-scroll"
        ></textarea>
        <div className="flex gap-4">
          <button
            className="px-3 py-1 border border-neutral-200 rounded-xl hover:bg-foreground hover:text-background"
            type="submit"
          >
            Save
          </button>
          <Link href="/">
            <button className="px-3 py-1 border border-neutral-200 rounded-xl hover:bg-foreground hover:text-background">
              Cancel
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
