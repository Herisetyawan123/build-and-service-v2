"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { dataSelect } from "@/data/static/select-type-project";
import Navbar from "@/components/navbar";
import InputText from "@/components/form-input/input-text";
import InputSelect from "@/components/form-input/input-select";
import InputTextArea from "@/components/form-input/input-textarea";
import InputFile from "@/components/form-input/input-file";
import Footer from "@/components/footer";

export default function Formulir() {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  return (
    <React.Fragment>
      <Navbar />
      <main className="w-full mt-20" data-aos="zoom-in">
        <div className="w-[90%] sm:max-w-6xl mx-auto py-10">
          <section className="header-content-formulir">
            <h1 className="text-center text-3xl font-bold">
              Form Request Project
            </h1>
            <div className="my-10">
              <h2 className="text-xl font-semibold">
                Tata Cara dalam pemesan project
              </h2>
              <p className="text-slate-600 mt-1">
                Sebelum melakukan pemesanan project alangkah lebih baiknya simak
                alurnya terlebih dahulu
              </p>
              <div className="mt-5">
                <ul className="ml-5 text-slate-500 list-disc">
                  <li>
                    Sebelum melakukan pemesanan isi form request terlebih dahulu
                  </li>
                  <li>
                    Kemudian dari pihak kami akan memberikan pesan konfirmasi
                    melalui Whatsapp dari nomer yang telah di masukan di form
                  </li>
                  <li>
                    Setelah itu dari pihak kami akan mengajak client untuk
                    berdiskusi terlebih dahulu
                  </li>
                  <li>
                    Ketika mendapatkan kesepakatan maka kami akan langsung
                    mengeksekusi project
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="flex flex-col gap-9">
            {/* <!-- Input Fields --> */}
            <div className="">
              <div className="flex flex-col gap-5.5 p-6.5">
                <form action="">
                  <InputText
                    label="Nama"
                    name="nama"
                    placholder="Nama"
                    type="text"
                  />
                  <InputText
                    label="No Handphone"
                    name="handphone"
                    placholder="08..."
                    type="text"
                  />
                  <InputText
                    label="Judul Project"
                    name="project"
                    placholder="ex: Company Profile"
                    type="text"
                  />
                  <InputSelect
                    label="Type Project"
                    name="projects-type"
                    placholder=""
                    data={dataSelect}
                  />
                  <InputText
                    label="Range Min Harga"
                    name="minfee"
                    placholder=""
                    type="number"
                  />
                  <InputText
                    label="Range Max Harga"
                    name="maxfee"
                    placholder=""
                    type="number"
                  />
                  <InputTextArea
                    name="description"
                    label="Desciption Project"
                    placholder="Website untuk company profile"
                    value=""
                  />
                  <InputFile
                    label="Upload Sistem Requirement"
                    name="sr"
                    type="file"
                  />
                  <button
                    type="submit"
                    className="w-full rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-green-600 active:shadow-none shadow-lg bg-gradient-to-tr from-green-600 to-green-500 border-green-700 text-white mt-5"
                  >
                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-full group-hover:h-32 opacity-10"></span>
                    <span className="relative">Submit</span>
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
}
