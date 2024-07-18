"use client";
import { signOut } from "next-auth/react";

import Link from "next/link";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Header() {
  return (
    <div className=" fixed flex w-full z-10 backdrop-blur-sm text-foreground h-20 justify-between px-10 items-center border-b-2">
      <h2 className="text-xxl font-bold">SOMEBODY</h2>
      <div className="flex gap-5">
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
        <button onClick={() => signOut({ callbackUrl: "/" })}>Logout</button>
        <Link href="/auth/signin">Login</Link>
      </div>
    </div>
  );
}
