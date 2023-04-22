import { Navbar } from "@/components/Layout/Navbar/Navbar";
import Link from "next/link";
import React from "react";

const Custom404 = () => {
  return (
    <>
      <Navbar />
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-24 lg:px-8">
        <div className="text-center">
          <p className="text- text-8xl font-semibold text-gray-500">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-700 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-500">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-6 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Custom404;