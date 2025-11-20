'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { BookOpen, Heart, Users } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-primary/10 via-secondary/20 to-accent/10">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMGFjN2EiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzMuMzEzIDAgNi0yLjY4NyA2LTZzLTIuNjg3LTYtNi02LTYgMi42ODctNiA2IDIuNjg3IDYgNiA2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              Pendaftaran Santri Baru Dibuka
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-balance">
              Membentuk Generasi Qur&apos;ani yang Berakhlak Mulia
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              TK/TPA Al-Ikhlas adalah lembaga pendidikan Islam untuk anak usia dini yang berkomitmen mencetak generasi yang cinta Al-Quran, berakhlak mulia, dan berprestasi.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link href="/pendaftaran">
                  Daftar Sekarang
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/profil">
                  Pelajari Lebih Lanjut
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="font-semibold text-2xl text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Santri Aktif</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="font-semibold text-2xl text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Guru Berpengalaman</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="font-semibold text-2xl text-primary">8+</div>
                <div className="text-sm text-muted-foreground">Tahun Berpengalaman</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/hero-image.jpg"
                alt="Anak-anak belajar Al-Quran"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-border max-w-[200px]">
              <div className="text-3xl font-bold text-primary mb-1">4.9/5</div>
              <div className="text-sm text-muted-foreground">Rating dari Orang Tua</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
