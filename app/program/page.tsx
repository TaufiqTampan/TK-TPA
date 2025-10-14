'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  BookOpen,
  Brain,
  Heart,
  Users,
  Sparkles,
  MessageCircle,
  Bookmark,
  Smile,
  Trophy,
  Gift
} from 'lucide-react';

export default function ProgramPage() {
  const programs = [
    {
      icon: BookOpen,
      title: 'Pembelajaran Iqra\'',
      description: 'Metode Iqra\' yang terbukti efektif untuk mengajarkan anak membaca Al-Quran dengan benar. Program ini menggunakan 6 jilid Iqra\' yang sistematis, dari pengenalan huruf hijaiyah hingga membaca Al-Quran dengan tartil.',
      features: [
        'Pembelajaran bertahap dari jilid 1-6',
        'Bimbingan individual sesuai kemampuan',
        'Praktik langsung membaca huruf dan kata',
        'Evaluasi berkala setiap jilid',
      ],
      color: 'bg-emerald-500',
      duration: 'Setiap hari, 30 menit',
    },
    {
      icon: Brain,
      title: 'Tahfidz Juz Amma',
      description: 'Program hafalan surat-surat pendek dalam Juz 30 dengan target yang jelas. Santri dibimbing untuk menghafal dengan metode yang menyenangkan dan mudah diingat.',
      features: [
        'Target hafalan surat-surat pendek',
        'Metode pengulangan yang efektif',
        'Muroja\'ah (mengulang hafalan) rutin',
        'Sertifikat hafalan setiap target tercapai',
      ],
      color: 'bg-blue-500',
      duration: '3x seminggu, 45 menit',
    },
    {
      icon: Heart,
      title: 'Adab & Akhlak Islami',
      description: 'Pembentukan karakter dan akhlak mulia sesuai dengan tuntunan Al-Quran dan Sunnah. Santri diajarkan untuk berperilaku baik dalam kehidupan sehari-hari.',
      features: [
        'Adab kepada orang tua dan guru',
        'Akhlak dalam bergaul dengan teman',
        'Kejujuran dan tanggung jawab',
        'Kepedulian terhadap sesama',
      ],
      color: 'bg-rose-500',
      duration: '2x seminggu, 30 menit',
    },
    {
      icon: Users,
      title: 'Praktik Ibadah',
      description: 'Pembelajaran dan praktik langsung tata cara wudhu, sholat, dan ibadah sehari-hari yang benar sesuai dengan sunnah Rasulullah SAW.',
      features: [
        'Tata cara wudhu yang benar',
        'Gerakan dan bacaan sholat',
        'Doa-doa harian dan doa setelah sholat',
        'Praktik langsung dengan bimbingan',
      ],
      color: 'bg-amber-500',
      duration: '2x seminggu, 40 menit',
    },
    {
      icon: Sparkles,
      title: 'Kisah Nabi & Sahabat',
      description: 'Mengenal kisah-kisah inspiratif para Nabi dan Sahabat untuk menumbuhkan kecintaan dan keteladanan terhadap tokoh-tokoh Islam.',
      features: [
        'Kisah 25 Nabi dan Rasul',
        'Kisah Sahabat Nabi yang mulia',
        'Hikmah dan pelajaran dari setiap kisah',
        'Metode penyampaian yang menarik',
      ],
      color: 'bg-purple-500',
      duration: '1x seminggu, 30 menit',
    },
    {
      icon: MessageCircle,
      title: 'Bahasa Arab Dasar',
      description: 'Pengenalan kosa kata Bahasa Arab sederhana untuk memudahkan santri memahami Al-Quran dan berkomunikasi dengan bahasa Al-Quran.',
      features: [
        'Kosa kata harian dalam bahasa Arab',
        'Angka, warna, dan benda di sekitar',
        'Kalimat sederhana untuk percakapan',
        'Permainan edukatif bahasa Arab',
      ],
      color: 'bg-teal-500',
      duration: '2x seminggu, 30 menit',
    },
    {
      icon: Bookmark,
      title: 'Fiqih Dasar Anak',
      description: 'Pembelajaran dasar-dasar fiqih yang sesuai dengan usia anak, meliputi thaharah, sholat, puasa, dan ibadah lainnya.',
      features: [
        'Rukun Islam dan Rukun Iman',
        'Hukum-hukum dasar dalam Islam',
        'Perbedaan halal dan haram',
        'Penjelasan dengan bahasa sederhana',
      ],
      color: 'bg-orange-500',
      duration: '1x seminggu, 30 menit',
    },
    {
      icon: Smile,
      title: 'Kegiatan Kreatif Islami',
      description: 'Berbagai kegiatan kreatif yang bernuansa Islami untuk mengembangkan kreativitas dan keterampilan motorik anak.',
      features: [
        'Mewarnai kaligrafi dan gambar Islami',
        'Kerajinan tangan bernuansa Islam',
        'Menyanyi lagu-lagu Islami',
        'Permainan edukatif Islami',
      ],
      color: 'bg-pink-500',
      duration: '1x seminggu, 45 menit',
    },
    {
      icon: Trophy,
      title: 'Kompetisi & Perlombaan',
      description: 'Program kompetisi dan perlombaan untuk meningkatkan motivasi dan prestasi santri dalam bidang keagamaan.',
      features: [
        'Lomba hafalan surat pendek',
        'Lomba adzan dan iqomah',
        'Lomba mewarnai kaligrafi',
        'Penghargaan dan sertifikat juara',
      ],
      color: 'bg-indigo-500',
      duration: 'Setiap 3 bulan',
    },
    {
      icon: Gift,
      title: 'Perayaan Hari Besar Islam',
      description: 'Memperingati hari-hari besar Islam dengan berbagai kegiatan yang mendidik dan menyenangkan untuk santri.',
      features: [
        'Peringatan Maulid Nabi Muhammad SAW',
        'Perayaan Isra Mi\'raj',
        'Perayaan Idul Fitri dan Idul Adha',
        'Kegiatan bakti sosial dan santunan',
      ],
      color: 'bg-cyan-500',
      duration: 'Sesuai kalender Islam',
    },
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-primary/10 via-secondary/20 to-accent/10 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Program Pembelajaran</h1>
            <p className="text-lg text-muted-foreground">
              Berbagai program pembelajaran yang dirancang khusus untuk mengembangkan kemampuan spiritual, intelektual, dan karakter anak.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionWrapper className="bg-white">
        <div className="grid gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Card className="border-2 hover:border-primary transition-all hover:shadow-lg overflow-hidden">
                <div className="grid md:grid-cols-[auto_1fr] gap-0">
                  <div className={`${program.color} p-8 flex items-center justify-center md:min-w-[200px]`}>
                    <program.icon className="h-16 w-16 text-white" />
                  </div>
                  <div>
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                        <h3 className="text-2xl font-bold">{program.title}</h3>
                        <span className="text-sm font-medium bg-muted px-3 py-1 rounded-full w-fit">
                          {program.duration}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {program.description}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-primary">
                        Yang Dipelajari:
                      </h4>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {program.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <div className="bg-primary/10 rounded-full p-1 mt-0.5">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            </div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Siap Bergabung dengan Kami?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Daftarkan putra-putri Anda sekarang dan jadilah bagian dari keluarga besar TK/TPA Al-Ikhlas untuk masa depan yang lebih baik.
          </p>
          <a
            href="/pendaftaran"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Daftar Sekarang
          </a>
        </motion.div>
      </SectionWrapper>
    </>
  );
}
