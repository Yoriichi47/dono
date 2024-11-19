"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  } else {
    return (
      <nav className="flex items-center justify-between px-6 bg-gray-950 h-16 text-white">
        <div>
          <h3 className="font-bold logo">Dono-it</h3>
        </div>
        <ul className="flex gap-2 items-center">
          <li>Home</li>
          <li>About</li>
          <li>Pojects</li>
          <li>
            <Link href="/login">
              <button
                className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500  text-white ring-blue-800"
              >
                <span className="relative px-3 py-1 transition-all ease-in duration-75 hover:opacity-95 bg-gray-900 rounded-md ">
                  Get Started
                </span>
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
};

export default Navbar;
