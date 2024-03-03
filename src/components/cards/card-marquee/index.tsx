import React from "react";
import Image from "next/legacy/image";
import type CardMarqueeProps from "@/data/interfaces/props/card-marquee";

export default function CardMarquee({
  image,
  name,
  description,
}: CardMarqueeProps) {
  return (
    <div className="mr-20 w-[300px]">
      <a
        href="#"
        className="py-[13px] px-9 w-full bg-white shadow-md border-2 border-white over:text-blue-500 hover:border-solid hover:border-2 hover:border-green-500  rounded-lg inline-flex items-center "
      >
        <Image src={image} width={80} height={80} alt="laravel" />
        <div className="text-left rtl:text-right ml-5">
          <div className="-mt-1 font-sans text-gray-700 text-xl font-bold">
            {name}
          </div>
          <div className="mb-1 text-xs text-gray-700">{description}</div>
        </div>
      </a>
    </div>
  );
}
