"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const localSignOut = () => {
    signOut({callbackUrl: '/'});
  }
  const { data: session } = useSession();
  return (
    <nav className="flex items-center justify-between px-6 bg-gray-950 h-16 text-white">
      <div>
        <h3 className="font-bold logo">Dono-it</h3>
      </div>
      <div>
        {session && (
          <Link href="/dashboard">
            <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500  text-white ring-blue-800 mr-2">
              <span className="relative px-3 py-1 transition-all ease-in duration-75 hover:opacity-95 bg-gray-900 rounded-md ">
                Dashboard
              </span>
            </button>
          </Link>
        )}
        {session && (
          <button
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500  text-white ring-blue-800"
            onClick={localSignOut}
          >
            <span className="relative px-3 py-1 transition-all ease-in duration-75 hover:opacity-95 bg-gray-900 rounded-md ">
              Logout
            </span>
          </button>
        )}
        {!session && (
          <Link href="/login">
            <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500  text-white ring-blue-800">
              <span className="relative px-3 py-1 transition-all ease-in duration-75 hover:opacity-95 bg-gray-900 rounded-md ">
                Get Started
              </span>
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
