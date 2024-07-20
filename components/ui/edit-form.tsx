"use client";

import updatePost from "@/lib/actions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EditForm({ id, title, content }) {
  const [formData, setFormData] = useState({
    title: title,
    content: content,
  });
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = () => {
    updatePost(id, formData.title, formData.content);
    router.push("/");
    router.refresh();
  };

  return (
    <div>
      <form action={handleFormSubmit}>
        <input
          type="text"
          name="title"
          id="title"
          value={formData.title}
          onChange={handleInputChange}
        />
        <textarea
          name="content"
          id="content"
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
