import { Pool } from "pg";

export const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

export async function query(text, params) {
  const res = await pool.query(text, params);
  return res;
}
