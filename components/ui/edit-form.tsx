"use client";

import { updatePost } from "@/lib/actions";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

interface EditFormProps {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
}

export default function EditForm({
  id,
  title,
  content,
  imageUrl,
}: EditFormProps) {
  const [formData, setFormData] = useState({
    title: title,
    content: content,
    newImage: null as File | null,
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
      setFormData({ ...formData, newImage: e.target.files[0] });
    }
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();

    let newImageUrl = imageUrl;

    // If a new image is selected, upload it
    if (formData.newImage) {
      setUploading(true);
      newImageUrl = await uploadImage(formData.newImage);
      setUploading(false);
    }

    const result = await updatePost(
      id,
      formData.title,
      formData.content,
      newImageUrl
    );

    if (result.message === "OK") {
      router.push("/");
      router.refresh();
    }
  };

  const uploadImage = async (file: File) => {
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
    <div className="w-full min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col border border-neutral-200 rounded-xl px-2 sm:px-10 py-5 w-[800px] gap-8"
      >
        <h1 className="text-2xl">📝 Edit Post</h1>

        {imageUrl && (
          <Image
            src={imageUrl}
            alt="Current image"
            priority={false}
            width={800}
            height={500}
            className="w-full h-[350px] object-cover rounded-sm"
          />
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full border border-neutral-200 rounded-xl px-2 sm:px-10 py-5"
        />

        {uploading && <p>Uploading new image...</p>}

        <input
          type="text"
          name="title"
          id="title"
          value={formData.title}
          onChange={handleInputChange}
          className="w-full border border-neutral-200 rounded-xl px-4 sm:px-10 py-5"
        />
        <textarea
          name="content"
          id="content"
          value={formData.content}
          onChange={handleInputChange}
          className="w-full h-[400px] border border-neutral-200 rounded-xl px-4 sm:px-10 py-5 overflow-scroll"
        ></textarea>
        <div className="flex gap-4">
          <button
            type="submit"
            className="px-3 py-1 border border-neutral-200 rounded-xl hover:bg-foreground hover:text-background"
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
