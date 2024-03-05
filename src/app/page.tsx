'use client';
import React, { useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CardSource from '@/components/cards/card-source';
import Navbar from '@/components/navbar';
import CardService from '@/components/cards/card-service';
import FaqAccordion from '@/components/accordion/faq-accordion';
import Footer from '@/components/footer';
import WebDesign from '@/assets/img/web.png';
import Mobile from '@/assets/img/mobile.png';
import Source from '@/assets/img/source.png';
import Abstrak from '@/assets/bg/abstrak.svg';
import ContactUs from '@/components/sections/contact-us';
import faqAccordion from '@/data/static/faq-accordion';
import cardMarquee from '@/data/static/card-marquee';
import CardMarquee from "@/components/cards/card-marquee";

export default function Home() {


  useEffect(() => {
    AOS.init({
      duration: 800
    });
  }, []);
  return (
    <React.Fragment>
      <Navbar />
      <main className="pb-28 mt-20">
        <section
          className="mb-20 w-[90%] sm:max-w-6xl mx-auto py-10"
          data-aos="fade-up"
        >
          <h3 className="font-medium text-green-500 text-lg">
            Recommended For You
          </h3>
          <h1 className="text-slate-600 font-bold text-3xl mt-2">
            Pilih sesuai kebutuhan kalian.
          </h1>
          <div className="flex gap-x-3 flex-wrap mt-10 gap-y-10 justify-center sm:justify-start">
            <CardSource
              title="Source E-commerce fullstack javascript"
              link="/"
              price="500.000"
            />
            <CardSource
              title="Source E-commerce fullstack javascript"
              link="/"
              price="500.000"
            />
            <CardSource
              title="Source E-commerce fullstack javascript"
              link="/"
              price="500.000"
            />
            {/* <CardSource title='Source E-commerce fullstack javascript' link='/' price='500.000' /> */}
          </div>
        </section>

        <section
          className="bg-[#C8FFE0] w-full rounded-sm mb-20 mx-auto py-10"
          data-aos="fade-up"
          style={{ backgroundImage: `url(${Abstrak.src})` }}
        >
          <div className="w-[90%] sm:max-w-6xl mx-auto py-10">
            <div className="text-center">
              <h3 className="font-medium text-green-500 text-lg">
                we shall never deny guest even the most ridiculous request.
              </h3>
              <h1 className="text-slate-600 font-bold text-3xl mt-2">
                Our Service
              </h1>
            </div>
            <div className="mt-5 flex flex-wrap sm:justify-center sm:flex-row sm:gap-x-5 flex-col gap-y-5">
              <CardService image={WebDesign} title="Web Developer" />
              <CardService image={Mobile} title="Android Developer" />
              <CardService image={Source} title="Source Coding" />
            </div>
          </div>
        </section>

        <section className="mt-[180px]">
          <div className="text-center">
            <h3 className="font-medium text-green-500 text-lg">
              Selected based on specific needs and scale of the project.
            </h3>
            <h1 className="text-slate-600 font-bold text-3xl mt-2">
              Our Tech Stack
            </h1>
          </div>

          <Marquee
            pauseOnHover
            direction="right"
            className="mt-[30px] py-[30px]"
          >
            {cardMarquee.item1.map((data, index) => (
              <CardMarquee
                key={index}
                image={data.image}
                name={data.name}
                description={data.description}
              />
            ))}
          </Marquee>

          <Marquee pauseOnHover className="mb-[150px] py-[40px]">
            {cardMarquee.item2.map((data, index) => (
              <CardMarquee
                key={index}
                image={data.image}
                name={data.name}
                description={data.description}
              />
            ))}
          </Marquee>
        </section>

        <section className="w-[90%] sm:max-w-6xl mx-auto mb-[100px]">
          <div data-aos="zoom-in">
            <h3 className="font-medium text-green-500 text-lg">
              Info lebih lanjut
            </h3>
            <h1 className="text-slate-600 font-bold text-3xl mt-2">
              Frequently Asked Questions
            </h1>
          </div>
          <div className="mt-10 space-y-5">
            {faqAccordion.map((data, index) => (
              <FaqAccordion
                key={index}
                title={data.title}
                description={data.description}
              />
            ))}
          </div>
        </section>
        <ContactUs />
      </main>
      <Footer />
    </React.Fragment>
  );
}
