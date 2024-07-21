"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (result.error) {
      setError(result.error);
    } else {
      router.push("/");
      router.refresh();
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      {error && <p>{error}</p>}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col border border-neutral-200 rounded-xl px-10 py-5 w-[370px] h-[370px] gap-4"
      >
        <h1 className="text-2xl text-center">🫡 Log In</h1>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="w-full border border-neutral-200 rounded-xl px-5 py-3"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="w-full border border-neutral-200 rounded-xl px-5 py-3"
        />
        <div className="flex flex-col gap-4 w-full">
          <button
            type="submit"
            className="px-3 py-1 border border-neutral-200 rounded-xl hover:bg-foreground hover:text-background"
          >
            Log In
          </button>

          <Link
            href="/"
            className="px-3 py-1 border border-neutral-200 rounded-xl hover:bg-foreground hover:text-background text-center"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
