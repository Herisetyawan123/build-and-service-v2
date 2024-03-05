'use client';

import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import Image from 'next/legacy/image';
import Logo from '@/assets/logo.png';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from 'next-auth/react';
import React from 'react';

export default function SideNav() {
  const handleSignOut = () => {
    signOut({ callbackUrl: '/', redirect: true }).catch((err) =>
      console.log(err)
    );
  };
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="hidden mb-2 md:flex h-20 items-end justify-center rounded-md p-4 md:h-40"
        href="/"
      >
        <div className="hidden md:block w-32 text-white md:w-40">
          <Image src={Logo} alt="logo" />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <button
          onClick={handleSignOut}
          className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-green-100 p-3 text-sm font-medium hover:bg-green-100 hover:text-green-600 md:flex-none md:justify-start md:p-2 md:px-3"
        >
          <PowerIcon className="w-6" />
          <div className="hidden md:block">Sign Out</div>
        </button>
      </div>
    </div>
  );
}
