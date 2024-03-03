"use client";
import { useEffect } from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import { FaInstagram, FaGithubAlt, FaLinkedin } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import type CardTeamProps from "@/data/interfaces/props/card-team";

export default function CardTeam({
  name,
  description,
  github,
  image,
  instagram,
  linkedin,
}: CardTeamProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  return (
    <div
      className="py-8 w-72 lg:w-64 shadow-md rounded-xl bg-white flex flex-col justify-center items-center"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <div className="h-1/2">
        <div className="bg-[#f6f8fd] w-32 h-32 rounded-full relative">
          <Image
            src={image}
            className="object-cover w-32 h-32 rounded-full"
            layout="fill"
            alt="profile"
          />
        </div>
      </div>
      <div className="mt-5 text-center mx-5 h-2/3">
        <h1 className="text-gray-900 font-bold text-xl">{name}</h1>
        <p className="text-slate-700 mt-2 text-sm">{description}</p>
      </div>
      <div className="mt-10 gap-x-5 flex h-1/3 items-end">
        <Link href={instagram} target="_blank">
          <FaInstagram
            size={25}
            className="text-green-600 hover:text-green-800"
          />
        </Link>
        <Link href={github} target="_blank">
          <FaGithubAlt
            size={25}
            className="text-green-600 hover:text-green-800"
          />
        </Link>
        <Link href={linkedin} target="_blank">
          <FaLinkedin
            size={25}
            className="text-green-600 hover:text-green-800"
          />
        </Link>
      </div>
    </div>
  );
}
