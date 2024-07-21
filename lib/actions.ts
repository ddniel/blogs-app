"use server";

import { query } from "./db";

export async function updatePost(id: string, title: string, content: string) {
  try {
    const res = await query(
      `UPDATE posts SET title=$1, content=$2 WHERE id=$3`,
      [title, content, id]
    );
    return { message: "OK" };
  } catch (error) {
    return { message: "Unable to update" };
  }
}

export async function createPost(title: string, content: string) {
  try {
    const res = await query(
      "INSERT INTO posts (title, content) VALUES ($1, $2)",
      [title, content]
    );
    return { message: "Post created succesfully." };
  } catch (error) {
    return { message: "Unable to create post." };
  }
}

export async function deletePost(id: string) {
  try {
    const res = await query("DELETE FROM posts WHERE id=$1", [id]);
    return { message: "OK" };
  } catch (error) {
    return { message: "Unable to delete post." };
  }
}