"use client";

import { signOut } from "next-auth/react";
import { isLoggedIn } from "../lib/auth";

import Link from "next/link";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Header() {
  const [session, setSession] = useState(false);

  useEffect(() => {
    let res = false;
    async function getSession() {
      res = await isLoggedIn();
      setSession(res);
    }

    getSession();
  }, []);

  return (
    <div className=" fixed flex w-full z-10 backdrop-blur-sm text-foreground h-20 justify-between px-10 items-center border-b-2">
      <Link href="/">
        <h2 className="text-xxl font-bold">SOMEBODY</h2>
      </Link>
      <div className="flex gap-5">
        {session && (
          <Link href="/posts/create">
            <button className="px-3 py-1 border border-neutral-200 rounded-xl hover:bg-foreground hover:text-background">
              + Create Post
            </button>
          </Link>
        )}
        <FaFacebookSquare
          size={30}
          className="text-neutral-500 cursor-pointer hover:text-foreground"
        />
        <FaInstagram
          size={30}
          className="text-neutral-500 cursor-pointer hover:text-foreground"
        />
        <FaLinkedin
          size={30}
          className="text-neutral-500 cursor-pointer hover:text-foreground"
        />

        {session ? (
          <button onClick={() => signOut({ callbackUrl: "/" })}>Logout</button>
        ) : (
          <Link href="/auth/signin">Login</Link>
        )}
      </div>
    </div>
  );
}
