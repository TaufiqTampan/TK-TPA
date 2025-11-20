'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import { type Testimonial } from '@/lib/api';

// TODO: Replace this with a proper API call once the backend endpoint is available.
const testimonials: Testimonial[] = [
  {
    id: '1',
    nama_orang_tua: 'Ibu Sarah',
    nama_anak: 'Ahmad',
    testimoni: 'Anak saya sangat senang sekolah di sini. Guru-gurunya sabar dan lingkungannya sangat mendukung.',
    rating: 5,
    is_published: true,
    created_at: new Date().toISOString(),
  },
  {
    id: '2',
    nama_orang_tua: 'Bapak Wijaya',
    nama_anak: 'Fitri',
    testimoni: 'Metode pembelajarannya kreatif, anak saya jadi lebih semangat belajar, terutama dalam menghafal Al-Quran.',
    rating: 5,
    is_published: true,
    created_at: new Date().toISOString(),
  },
  {
    id: '3',
    nama_orang_tua: 'Ibu Lestari',
    nama_anak: 'Budi',
    testimoni: 'Fasilitasnya lengkap dan bersih. Program outing class-nya juga sangat bagus untuk pengalaman anak.',
    rating: 4,
    is_published: true,
    created_at: new Date().toISOString(),
  },
];

export const TestimonialsSection = () => {
  return (
    <SectionWrapper id="testimoni" className="bg-gradient-to-br from-primary/5 to-secondary/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimoni Orang Tua</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Apa kata orang tua santri tentang TK/TPA Al-Ikhlas
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-2 hover:border-primary transition-colors">
              <CardContent className="p-6">
                <Quote className="h-10 w-10 text-primary/20 mb-4" />

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  &quot;{testimonial.testimoni}&quot;
                </p>

                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-sm">{testimonial.nama_orang_tua}</p>
                  <p className="text-xs text-muted-foreground">Orang tua dari {testimonial.nama_anak}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}