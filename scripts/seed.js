const { dummyPosts, testUser } = require("../lib/seedData");
const bcrypt = require("bcryptjs");
const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

async function seedUsers() {
  try {
    //Create user table
    const createTable = await pool.query(`
        CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP )`);

    console.log("Created users table");

    //Create user
    const hashedPassword = await bcrypt.hash(testUser.password, 12);
    const createUser = await pool.query(
      `INSERT INTO users (name, email, password) VALUES ($1, $2, $3)`,
      [testUser.name, testUser.email, hashedPassword]
    );

    console.log("Added test user.");

    return { message: "Users seeded succesfully." };
  } catch (error) {
    console.log("Error seeding users: ", error);
  }
}

async function seedPosts() {
  try {
    const createTable = await pool.query(`CREATE TABLE IF NOT EXISTS posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  author_id INTEGER REFERENCES users(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`);

    console.log("Create table posts.");

    //Insert dummy posts
    const insertPosts = await Promise.all(
      dummyPosts.map((post) =>
        pool.query(`INSERT INTO posts (title, content) VALUES ($1, $2)`, [
          post.title,
          post.content,
        ])
      )
    );

    console.log("Seeded dummy posts succesfully.");
    return { message: "Seeded dummy posts succesfully." };
  } catch (error) {
    console.log("Error seeding posts.", error);
  }
}

async function main() {
  try {
    await seedUsers();
    await seedPosts();
  } catch (error) {
    console.error("Error in seeding:", error);
  } finally {
    await pool.end();
    console.log("Database connection closed.");
  }
}

main();
