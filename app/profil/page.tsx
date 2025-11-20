'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Award, Heart, Target, BookOpen, Star } from 'lucide-react';

export default function ProfilPage() {
  const values = [
    {
      icon: BookOpen,
      title: 'Qur\'ani',
      description: 'Menjadikan Al-Quran sebagai pedoman hidup',
    },
    {
      icon: Heart,
      title: 'Akhlak Mulia',
      description: 'Membentuk karakter yang santun dan beradab',
    },
    {
      icon: Target,
      title: 'Berprestasi',
      description: 'Mengembangkan potensi anak secara optimal',
    },
    {
      icon: Users,
      title: 'Kekeluargaan',
      description: 'Membangun lingkungan belajar yang hangat',
    },
  ];

  const teachers = [
    {
      name: 'Ustadz Ahmad Fauzi, S.Pd.I',
      role: 'Kepala TPA',
      experience: '15 tahun mengajar',
    },
    {
      name: 'Ustadzah Siti Fatimah, S.Pd.I',
      role: 'Koordinator Tahfidz',
      experience: '12 tahun mengajar',
    },
    {
      name: 'Ustadz Muhammad Ridwan, Lc',
      role: 'Guru Iqra\'',
      experience: '10 tahun mengajar',
    },
    {
      name: 'Ustadzah Nur Halimah, S.Pd.I',
      role: 'Guru Adab & Akhlak',
      experience: '8 tahun mengajar',
    },
    {
      name: 'Ustadz Abdul Malik, S.Pd.I',
      role: 'Guru Praktik Ibadah',
      experience: '9 tahun mengajar',
    },
    {
      name: 'Ustadzah Aisyah Rahman, S.Pd.I',
      role: 'Guru Bahasa Arab',
      experience: '7 tahun mengajar',
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Profil Lembaga</h1>
            <p className="text-lg text-muted-foreground">
              TK/TPA Al-Ikhlas berdiri sejak tahun 2016 dengan komitmen untuk mencetak generasi Qur&apos;ani yang berakhlak mulia dan berprestasi.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionWrapper className="bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="https://i.pinimg.com/736x/bf/a4/cc/bfa4cc75a1d5e9189e59e6a5c9bf28ac.jpg"
              alt="Gedung TPA"
              className="w-full h-[400px] object-contain rounded-2xl shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Sejarah Singkat</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                TK/TPA Al-Ikhlas didirikan pada tahun 2016 oleh sekelompok tokoh masyarakat yang peduli terhadap pendidikan Al-Quran untuk anak-anak. Berawal dari sebuah musholla kecil dengan hanya 15 santri, kini Al-Ikhlas telah berkembang menjadi lembaga pendidikan Islam yang dipercaya oleh lebih dari 100 orang tua.
              </p>
              <p>
                Dengan mengedepankan metode pembelajaran yang menyenangkan namun tetap efektif, kami berkomitmen untuk menjadikan setiap santri sebagai generasi yang cinta Al-Quran dan berakhlak mulia.
              </p>
              <p>
                Saat ini, TK/TPA Al-Ikhlas memiliki fasilitas yang memadai, tenaga pengajar yang berpengalaman, dan program pembelajaran yang terstruktur untuk mendukung perkembangan spiritual dan intelektual anak.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-4">Visi & Misi</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <Card className="border-2 border-primary">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Visi</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Menjadi lembaga pendidikan Islam terdepan dalam mencetak generasi Qur&apos;ani yang berakhlak mulia, cerdas, dan berprestasi untuk kemuliaan Islam dan kemajuan bangsa.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Misi</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Memberikan pendidikan Al-Quran berkualitas dengan metode yang efektif</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Membentuk karakter Islami yang kuat pada setiap santri</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Mengembangkan potensi anak secara optimal dan menyeluruh</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Membangun kerjasama yang baik dengan orang tua santri</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-4">Nilai-Nilai Kami</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Nilai-nilai yang kami tanamkan dalam setiap aspek pembelajaran
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 hover:border-primary transition-colors text-center">
                  <CardContent className="p-6">
                    <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-4">Tim Pengajar</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Guru dan ustadzah yang berpengalaman, berdedikasi, dan bersertifikat
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teachers.map((teacher, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-2 hover:border-primary transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-1">{teacher.name}</h3>
                    <p className="text-primary text-sm font-medium mb-2">{teacher.role}</p>
                    <p className="text-xs text-muted-foreground">{teacher.experience}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </SectionWrapper>
    </>
  );
}
