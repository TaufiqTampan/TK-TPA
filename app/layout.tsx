import './globals.css';
import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: 'TK/TPA Al-Ikhlas - Lembaga Pendidikan Islam Anak',
  description: 'TK/TPA Al-Ikhlas adalah lembaga pendidikan Islam untuk anak usia dini yang fokus pada pembelajaran Al-Quran, pembentukan akhlak mulia, dan pengembangan karakter Islami.',
  keywords: 'TK Islam, TPA, Taman Pendidikan Al-Quran, Pendidikan Anak Islam, Tahfidz Anak, Belajar Iqra',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
