"use server";

import { revalidatePath } from "next/cache";
import { query } from "./db";

export async function createUser(
  name: string,
  email: string,
  password: string
) {
  try {
    const res = await query(
      `INSERT INTO users (name, email, password) VALUES ($1, $2, $3)`,
      [name, email, password]
    );
    return { message: "User added succesfully." };
  } catch (error) {
    return { message: "Unable to create user." };
  }
}

export async function updatePost(
  id: number,
  title: string,
  content: string,
  imageUrl: string
) {
  try {
    const res = await query(
      `UPDATE posts SET title=$1, content=$2, image_url=$3 WHERE id=$4`,
      [title, content, imageUrl, id]
    );
    revalidatePath("/");
    return { message: "OK" };
  } catch (error) {
    return { message: "Unable to update" };
  }
}

export async function createPost(
  title: string,
  content: string,
  imageUrl: string
) {
  try {
    //INSERT data into the DB
    const res = await query(
      "INSERT INTO posts (title, content, image_url) VALUES ($1, $2, $3)",
      [title, content, imageUrl]
    );
    revalidatePath("/");
    return { message: "Post created succesfully." };
  } catch (error) {
    return { message: "Unable to create post." };
  }
}

export async function deletePost(id: number) {
  try {
    const res = await query("DELETE FROM posts WHERE id=$1", [id]);
    revalidatePath("/");
    return { message: "OK" };
  } catch (error) {
    return { message: "Unable to delete post." };
  }
}
