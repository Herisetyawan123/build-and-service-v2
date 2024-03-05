'use client';
import Link from 'next/link';
import Image from 'next/legacy/image';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '@/components/navbar';
import SectionService from '@/components/sections/service';
import serviceData from '@/data/static/service';
import bannerService from '@/assets/img/service-page-assets/banner-service.jpg';
import Footer from '@/components/footer';

export default function Service() {
  useEffect(() => {
    AOS.init({
      duration: 800
    });
  }, []);
  return (
    <React.Fragment>
      <Navbar />
      <section className="banner-section w-full sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl py-28 lg:mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2 mx-8 md:mx-auto">
          <div className="service-content" data-aos="fade-right">
            <h4 className="text-sm lg:text-xl text-slate-400">
              Build and Service. <br /> The best service ever!
            </h4>
            <h2 className="text-4xl md:text-6xl font-bold text-green-600">
              Semua Service
              <br />
              <span className="font-semibold text-neutral-900">
                tersedia disini
              </span>
            </h2>
            <Link
              href="/formulir"
              className="relative inline-block px-3 py-1 md:px-6 md:py-3 font-medium group my-6"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-green-600 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-green-600 group-hover:bg-green-600"></span>
              <span className="relative text-green-600 text-sm md:text-lg group-hover:text-white">
                Request Now
              </span>
            </Link>
          </div>
          <div className="service-image" data-aos="zoom-in">
            <Image
              src={bannerService}
              alt="banner-service"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>
      <main className="w-full py-10">
        <div data-aos="fade-up" className="mb-20">
          <h1 className="text-center text-xl lg:text-3xl w-full lg:w-7/12 mx-auto text-slate-900 font-bold">
            Our Services
          </h1>
        </div>

        {serviceData.map((data, index) => (
          <SectionService
            key={index}
            image={data.image}
            title={data.title}
            description={data.description}
          />
        ))}
      </main>
      <Footer />
    </React.Fragment>
  );
}
