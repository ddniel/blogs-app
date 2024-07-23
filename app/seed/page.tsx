import { seedPosts, seedUsers } from "@/scripts/seed";

export default async function page() {
  const users = await seedUsers();
  const posts = await seedPosts();

  if (
    users?.message === "Users seeded succesfully." &&
    posts?.message === "Seeded dummy posts succesfully."
  ) {
    return <div>Seeded succesfully.</div>;
  } else {
    return <div>Somethig went wrong</div>;
  }
}