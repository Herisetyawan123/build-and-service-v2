import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Provider from './ui/providers';

const poppins = Poppins({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Build and Service',
  description: 'Software House',
  icons: '/src/assets/logo.png'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className + ' relative'}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
