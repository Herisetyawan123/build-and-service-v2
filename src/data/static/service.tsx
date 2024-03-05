import type SectionServiceProps from '../interfaces/props/section-service';
import webDevelopment from '@/assets/img/service-page-assets/web-development.jpg';
import mobileDevelopment from '@/assets/img/service-page-assets/mobile-development.jpg';
import sourceCode from '@/assets/img/service-page-assets/source-code.jpg';

const serviceData: SectionServiceProps[] = [
  {
    image: webDevelopment,
    title: 'Web Development',
    description:
      'Build and Service menyediakan layanan pembuatan dan perbaikan website, kami menguasai php, js, go, html dan css. Framework yang kita pakai adalah laravel,next js, react js, express, tailwind, bootstrap, dll'
  },
  {
    image: mobileDevelopment,
    title: 'Mobile Development',
    description:
      'Build and Service menyediakan layanan pembuatan dan perbaikan aplikasi mobile kami menggunakan framework flutter dalam penyelesainnya'
  },
  {
    image: sourceCode,
    title: 'Source Code',
    description:
      'Build And Service juga menjual berbagai source code yang dapat kalian pelajari atau sebagai bahan pembuatan project kalian.'
  }
];

export default serviceData;
