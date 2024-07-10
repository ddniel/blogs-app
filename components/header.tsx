import Link from "next/link";

export default function Header() {
  return (
    <div className="flex w-100 bg-background text-foreground h-20 justify-between px-10 items-center border-b-2">
      <h2>Blogs App</h2>
      <div className="flex gap-5">
        <h2>Signup</h2>
        <h2>Login</h2>
      </div>
    </div>
  );
}
