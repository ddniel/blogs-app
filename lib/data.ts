"use server";

import { query } from "./db";

export async function getAllPosts() {
  const posts = await query("SELECT * from posts");

  return posts.rows;
}

export async function getPostById(id: number) {
  const post = await query("SELECT * from posts WHERE id = $1", [id]);

  return post.rows[0];
}
