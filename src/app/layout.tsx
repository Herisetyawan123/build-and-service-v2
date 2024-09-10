import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Build and Service',
  description:
    'Build and Service adalah mitra teknologi yang menyediakan solusi perangkat lunak inovatif untuk membangun dan mengoptimalkan bisnis Anda. Dari pengembangan perangkat lunak kustom hingga integrasi sistem yang canggih, kami memberikan solusi bernilai tambah bagi perusahaan Anda. Temukan potensi penuh bisnis Anda dengan Build and Service.',
  icons: '/favicon.ico',
  authors: [
    {
      name: 'Heri Setyawan',
      url: 'https://github.com/herisetyawan123'
    },
    {
      name: 'Perdana Putro H',
      url: 'https://github.com/perdanaph'
    },
    {
      name: 'Muhammad Raffi K',
      url: 'https://github.com/rafikusdiarto'
    },
    {
      name: 'Faisal Bahari',
      url: 'https://github.com/faisallbhr'
    }
  ],
  keywords: [
    'website',
    'applikasi',
    'software house',
    'build and service',
    'perusahaan',
    'pembuatan aplikasi',
    'IT',
    'coding',
    'jasa'
  ]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className + ' relative'}>{children}</body>
    </html>
  );
}
