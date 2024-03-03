import Link from "next/link";
import Image from "next/legacy/image";
import { FaCartArrowDown } from "react-icons/fa";
import type CardSourceProps from "@/data/interfaces/props/card-source";

const CardSource = ({ title, price, link }: CardSourceProps) => {
  return (
    <div className="bg-white p-8 rounded-lg w-[22rem] hover:shadow-xl transition-all duration-300 group">
      <div className="w-full h-40 bg-blue-200 rounded-lg relative overflow-hidden">
        <Image
          src="https://buildwithangga.com/themes/front/images/thumbnail/thumbnail_roadmap-2.webp"
          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
          alt=""
          layout="fill"
        />
        <div className="scale-0 group-hover:scale-100 transition-transform duration-500 absolute w-full h-full bg-black bg-opacity-25">
          <div className="flex justify-center items-center h-full">
            <h2 className="px-5 py-2 border-2 border-white text-white font-medium">
              Let&apos;s Buy
            </h2>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h2 className="text-slate-600 text-xl font-bold break-words">
          {title}
        </h2>

        <div className="mt-5">
          <h4 className="text-lg font-normal text-slate-500">Rp. {price},-</h4>
        </div>

        <div className="mt-5">
          <Link href={link}>
            <p className="flex items-center justify-center gap-x-5 font-semibold text-lg bg-green-600 px-5 p-2 rounded-lg text-white text-center">
              <FaCartArrowDown /> Buy
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardSource;
