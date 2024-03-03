"use client";

import Link from "next/link";
import React from "react";

export default function NotFound(): React.JSX.Element {
  return (
    <div>
      <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
        <h1 className="text-9xl font-extrabold text-white tracking-widest">
          404
        </h1>
        <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
          Page Not Found
        </div>
        <button className="mt-5">
          <Link
            href="/"
            className="relative inline-block px-3 py-1 md:px-6 md:py-3 font-medium group my-6"
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-green-600 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-green-600 group-hover:bg-green-600"></span>
            <span className="relative text-green-600 text-sm md:text-lg group-hover:text-white">
              Go Back Home
            </span>
          </Link>
        </button>
      </main>
    </div>
  );
}
