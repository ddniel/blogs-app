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

export async function getFilteredPosts(search: string) {
  const searchQuery = `%${search.toLocaleLowerCase()}%`;
  try {
    const posts = await query(
      "SELECT * FROM posts WHERE LOWER(title) LIKE $1",
      [searchQuery]
    );

    return posts.rows;
  } catch (error) {
    console.error("Database Error:", error);
  }
}
