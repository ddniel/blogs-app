"use client";

import { signOut } from "next-auth/react";
import { isLoggedIn } from "../lib/auth";

import Link from "next/link";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Suspense, useEffect, useState } from "react";
import SearchBar from "./ui/searchBar";
import { IoMenu } from "react-icons/io5";

export default function Header() {
  const [session, setSession] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    let res = false;
    async function getSession() {
      res = await isLoggedIn();
      setSession(res);
    }

    getSession();
  }, []);

  return (
    <div
      className={`${
        openMenu && "backdrop-blur-xl"
      } sm:fixed w-full z-10 backdrop-blur-sm text-foreground sm:h-20  px-10  border-b-2`}
    >
      <div className="flex justify-between items-center h-20">
        <Link href="/">
          <h2 className="text-xxl font-bold">SOMEBODY</h2>
        </Link>
        <IoMenu
          className="sm:hidden text-3xl cursor-pointer"
          onClick={() => setOpenMenu(!openMenu)}
        />
        <Suspense>
          <SearchBar className="hidden" />
        </Suspense>

        <div className="hidden sm:flex gap-5">
          {session && (
            <Link href="/posts/create">
              <button className="px-3 py-1 border border-neutral-200 rounded-xl hover:bg-foreground hover:text-background">
                + Create Post
              </button>
            </Link>
          )}
          <FaFacebookSquare className="text-neutral-500 cursor-pointer hover:text-foreground text-xl sm:text-3xl" />
          <FaInstagram className="text-neutral-500 cursor-pointer hover:text-foreground text-xl sm:text-3xl" />
          <FaLinkedin className="text-neutral-500 cursor-pointer hover:text-foreground text-xl sm:text-3xl" />

          {session ? (
            <button onClick={() => signOut({ callbackUrl: "/" })}>
              Logout
            </button>
          ) : (
            <Link href="/auth/signin">Login</Link>
          )}
        </div>
      </div>
      {/* Smartphones Menu */}
      {openMenu && (
        <div className="sm:hidden flex flex-col items-center py-4 gap-4">
          {session ? (
            <button onClick={() => signOut({ callbackUrl: "/" })}>
              Logout
            </button>
          ) : (
            <Link href="/auth/signin">Login</Link>
          )}
          <Suspense>
            <SearchBar className="flex" />
          </Suspense>
          {session && (
            <Link href="/posts/create">
              <button className="px-3 py-1 border border-neutral-200 rounded-xl hover:bg-foreground hover:text-background">
                + Create Post
              </button>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
