'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Brain, Heart, Users, Sparkles, MessageCircle } from 'lucide-react';

export function ProgramsSection() {
  const programs = [
    {
      icon: BookOpen,
      title: 'Belajar Iqra\'',
      description: 'Pembelajaran membaca Al-Quran dengan metode Iqra\' yang sistematis dan mudah dipahami anak-anak.',
      color: 'bg-emerald-500',
    },
    {
      icon: Brain,
      title: 'Hafalan Juz Amma',
      description: 'Program tahfidz surat-surat pendek dalam Juz Amma dengan target hafalan yang jelas dan terukur.',
      color: 'bg-blue-500',
    },
    {
      icon: Heart,
      title: 'Adab & Akhlak Islami',
      description: 'Pembentukan karakter dan akhlak mulia sesuai dengan tuntunan Al-Quran dan Hadits Nabi.',
      color: 'bg-rose-500',
    },
    {
      icon: Users,
      title: 'Praktik Ibadah',
      description: 'Pembelajaran praktik wudhu, sholat, dan doa-doa harian yang benar sesuai sunnah Rasulullah.',
      color: 'bg-amber-500',
    },
    {
      icon: Sparkles,
      title: 'Kisah Nabi & Sahabat',
      description: 'Mengenal kisah-kisah inspiratif para Nabi dan Sahabat untuk menumbuhkan keteladanan.',
      color: 'bg-purple-500',
    },
    {
      icon: MessageCircle,
      title: 'Bahasa Arab Dasar',
      description: 'Pengenalan kosa kata Bahasa Arab sederhana untuk memudahkan memahami Al-Quran.',
      color: 'bg-teal-500',
    },
  ];

  return (
    <SectionWrapper id="program" className="bg-muted/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Program Pembelajaran</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Berbagai program pembelajaran yang dirancang khusus untuk mengembangkan kemampuan spiritual dan intelektual anak.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((program, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-2 hover:border-primary transition-all hover:shadow-lg group">
              <CardHeader>
                <div className={`${program.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <program.icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl">{program.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{program.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
