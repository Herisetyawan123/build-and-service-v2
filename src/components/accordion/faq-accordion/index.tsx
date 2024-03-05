'use client';
import { useEffect, useId } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import type FaqAccordionProps from '@/data/interfaces/props/faq-accordion';

export default function FaqAccordion({
  title,
  description
}: FaqAccordionProps) {
  const id = useId();

  const openTab = () => {
    const logoDown = document.getElementById('logo-down-' + id);
    const answerDown = document.getElementById('answer-faq-' + id);
    logoDown?.classList.toggle('rotate-180');
    answerDown?.classList.toggle('hidden');
  };

  useEffect(() => {
    AOS.init({
      duration: 800
    });
  }, []);

  return (
    <div
      className="border px-5 py-3 rounded-md bg-white space-y-8 transition-all duration-500 cursor-pointer "
      data-aos="fade-up"
      data-aos-duration="1500"
      onClick={() => openTab()}
    >
      {/* question */}
      <div className="flex gap-x-10 items-center">
        <div className="flex justify-center items-center h-14 w-14 rounded-lg bg-green-100">
          <FaAngleDown
            id={`logo-down-${id}`}
            className="text-green-800 text-3xl transition-all duration-500"
          />
        </div>
        <h5 className="font-bold text-lg ">{title}</h5>
      </div>

      <p
        id={`answer-faq-${id}`}
        className="pb-5 hidden text-slate-700 transition-all duration-500"
      >
        {description}
      </p>
    </div>
  );
}
