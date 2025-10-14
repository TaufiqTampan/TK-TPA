'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { Target, Eye, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function AboutSection() {
  const features = [
    {
      icon: Eye,
      title: 'Visi',
      description: 'Menjadi lembaga pendidikan Islam terdepan dalam mencetak generasi Qur\'ani yang berakhlak mulia dan berprestasi.',
    },
    {
      icon: Target,
      title: 'Misi',
      description: 'Memberikan pendidikan Al-Quran berkualitas, membentuk karakter Islami, dan mengembangkan potensi anak secara optimal.',
    },
    {
      icon: Award,
      title: 'Tujuan',
      description: 'Menghasilkan santri yang mampu membaca Al-Quran dengan baik, mengamalkan nilai-nilai Islam dalam kehidupan sehari-hari.',
    },
  ];

  return (
    <SectionWrapper id="tentang" className="bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Tentang TK/TPA Al-Ikhlas</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Lembaga pendidikan Islam yang berdedikasi untuk membentuk generasi Qur'ani sejak dini dengan metode pembelajaran yang menyenangkan dan efektif.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-2 hover:border-primary transition-colors">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-8 items-center"
      >
        <div className="order-2 md:order-1">
          <h3 className="text-2xl font-bold mb-4">Kenapa Memilih TK/TPA Al-Ikhlas?</h3>
          <ul className="space-y-3">
            {[
              'Metode pembelajaran Iqra\' yang terbukti efektif',
              'Guru dan ustadzah yang berpengalaman dan bersertifikat',
              'Lingkungan belajar yang Islami dan nyaman',
              'Program tahfidz dengan target yang jelas',
              'Pembentukan akhlak dan adab Islami',
              'Kegiatan ekstrakurikuler yang menyenangkan',
              'Laporan perkembangan santri secara berkala',
              'Biaya pendidikan yang terjangkau',
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="bg-primary/10 rounded-full p-1 mt-0.5">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="order-1 md:order-2">
          <img
            src="https://images.pexels.com/photos/8923173/pexels-photo-8923173.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Suasana belajar TPA"
            className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
          />
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
