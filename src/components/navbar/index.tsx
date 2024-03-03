import React, { useState } from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import Logo from "@/assets/logo.png";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <React.Fragment>
      <div className="fixed top-0 left-0 right-0 z-40 ">
        <header className="w-full h-auto backdrop-blur-sm bg-white/90  overflow-hidden">
          <nav className="w-[90%] h-20 sm:max-w-6xl mx-auto flex items-center font-medium justify-between">
            <Image
              src={Logo}
              objectFit={"cover"}
              height={48}
              width={68}
              alt="alt"
            />
            <div className="flex items-center">
              <div className="ml-20 space-x-20 hidden lg:block ">
                <Link
                  href={"/"}
                  className={`hover:text-green-800 ${pathname == "/" ? "text-green-600" : ""}`}
                >
                  Home
                </Link>
                <Link
                  href={"/service"}
                  className={`hover:text-green-800 ${pathname == "/service" ? "text-green-600" : ""}`}
                >
                  Service
                </Link>
                <Link
                  href={"/team"}
                  className={`hover:text-green-800 ${pathname == "/team" ? "text-green-600" : ""}`}
                >
                  Our Teams
                </Link>
              </div>
            </div>
            <div className="hidden sm:block">
              <Link
                href="/formulir"
                className="py-2 px-5 text-white bg-green-600 hover:bg-green-800 rounded-md"
              >
                Request Project
              </Link>
            </div>
            <button
              className="block sm:hidden text-gray-500 w-10 h-10 relative focus:outline-none bg-white"
              onClick={() => setOpen((prevState) => !prevState)}
            >
              <span className="sr-only">Open main menu</span>
              <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${!open && "-translate-y-1.5"} ${open && "rotate-45"}`}
                ></span>
                <span
                  aria-hidden="true"
                  className={`block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out  ${open && "opacity-0"}`}
                ></span>
                <span
                  aria-hidden="true"
                  className={`block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out ${!open && "translate-y-1.5"} ${open && "-rotate-45"}`}
                ></span>
              </div>
            </button>
          </nav>
        </header>
        <div
          style={{
            transformOrigin: "100% 50%",
          }}
          className={`${!open ? "scale-x-0 opacity-0" : "scale-x-1 opacity-100"} backdrop-blur-sm bg-white/90  py-10 w-full transition-all duration-500 border-b `}
        >
          <div className="flex flex-col items-start gap-y-4 w-[90%] sm:max-w-6xl mx-auto ">
            <div>
              <Link href={"/"}>Home</Link>
            </div>
            <div>
              <Link href={"/service"}>Service</Link>
            </div>
            <div>
              <Link href={"/team"}>Our Teams</Link>
            </div>
            <Link
              href="/formulir"
              className="mt-5 py-2 px-5 w-full text-center text-white bg-green-600 hover:bg-green-800 rounded-md"
            >
              Request Project
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
