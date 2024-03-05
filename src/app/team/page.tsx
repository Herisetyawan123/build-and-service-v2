'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import teamData from '@/data/static/team';
import Navbar from '@/components/navbar';
import CardTeam from '@/components/cards/card-teams';
import Footer from '@/components/footer';

export default function Team() {
  useEffect(() => {
    AOS.init({
      duration: 800
    });
  }, []);
  return (
    <React.Fragment>
      <Navbar />
      <main className="pb-32  mt-20">
        <div className="w-full lg:max-w-6xl py-10 mx-auto flex flex-col items-center">
          <section
            className="mx-5 lg:w-full lg:text-start"
            data-aos="fade-right"
          >
            <h3 className="font-bold text-green-500 text-3xl">Our Teams</h3>
            <h1 className="text-gray-500 mt-2 ">
              In Developing this platform, we need a team to help some issue and
              fixing it.
            </h1>
          </section>
          <section className="mt-10 lg:w-full flex sm:gap-x-10 flex-col sm:flex-row gap-y-10 text-center">
            {teamData.map((item, index) => (
              <CardTeam
                key={index}
                name={item.name}
                description={item.description}
                image={item.image}
                github={item.github}
                instagram={item.instagram}
                linkedin={item.linkedin}
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              />
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
}
