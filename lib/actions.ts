"use server";

import { query } from "./db";

export default async function updatePost(
  id: string,
  title: string,
  content: string
) {
  try {
    const res = await query(`UPDATE posts SET title=$1, content=$2`, [
      title,
      content,
    ]);
  } catch (error) {
    return { message: "Unable to update" };
  }
}
