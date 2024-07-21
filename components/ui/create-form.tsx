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
    <div>
      <form action={handleFormSubmit}>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Post title..."
          value={formData.title}
          onChange={handleInputChange}
        />
        <textarea
          name="content"
          id="content"
          placeholder="Post content..."
          value={formData.content}
          onChange={handleInputChange}
        ></textarea>
        <button type="submit">Save</button>
        <Link href="/">
          <button>Cancel</button>
        </Link>
      </form>
    </div>
  );
}
