"use client";

import { createPost } from "@/lib/actions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

interface FormData {
  title: string;
  content: string;
  imageFile: File | null;
}

export default function CreateForm() {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    content: "",
    imageFile: null,
  });

  const [uploading, setUploading] = useState(false);

  const router = useRouter();

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData({ ...formData, imageFile: e.target.files[0] });
    }
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.imageFile) {
      alert("Please select an image");
      return;
    }

    //Upload Image to cloudinary
    setUploading(true);
    const imageUrl = await uploadImge(formData.imageFile);
    setUploading(false);

    const result = await createPost(formData.title, formData.content, imageUrl);

    if (result.message === "Post created succesfully.") {
      router.push("/");
      router.refresh();
    }
  };

  const uploadImge = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      `${process.env.NEXT_PUBLIC_UPLOAD_PRESET}`
    );

    const response = await fetch(`${process.env.NEXT_PUBLIC_CLOUDINARY_URL}`, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    return data.secure_url;
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form
        onSubmit={handleFormSubmit}
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
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full border border-neutral-200 rounded-xl px-10 py-5"
        />
        {uploading ? <p>Uploading image...</p> : null}
        <div className="flex gap-4">
          <button
            className="px-3 py-1 border border-neutral-200 rounded-xl hover:bg-foreground hover:text-background"
            type="submit"
            disabled={uploading}
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
