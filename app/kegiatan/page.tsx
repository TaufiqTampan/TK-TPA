'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin } from 'lucide-react';
import { supabase, type Activity } from '@/lib/supabase';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';

export default function KegiatanPage() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { value: 'all', label: 'Semua Kegiatan' },
    { value: 'Pembelajaran', label: 'Pembelajaran' },
    { value: 'Tahfidz', label: 'Tahfidz' },
    { value: 'Lomba', label: 'Lomba' },
    { value: 'Outing', label: 'Outing Class' },
    { value: 'Perayaan', label: 'Perayaan' },
  ];

  useEffect(() => {
    async function fetchActivities() {
      setLoading(true);
      let query = supabase
        .from('activities')
        .select('*')
        .order('date', { ascending: false });

      if (selectedCategory !== 'all') {
        query = query.eq('category', selectedCategory);
      }

      const { data } = await query;

      if (data) {
        setActivities(data);
      }
      setLoading(false);
    }
    fetchActivities();
  }, [selectedCategory]);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Pembelajaran: 'bg-emerald-500',
      Tahfidz: 'bg-blue-500',
      Lomba: 'bg-rose-500',
      Outing: 'bg-amber-500',
      Perayaan: 'bg-purple-500',
    };
    return colors[category] || 'bg-gray-500';
  };

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Kegiatan Santri</h1>
            <p className="text-lg text-muted-foreground">
              Berbagai kegiatan menarik dan edukatif yang kami selenggarakan untuk mengembangkan potensi dan keterampilan santri.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionWrapper className="bg-white">
        <div className="mb-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category.value
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-muted hover:bg-muted/80'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="overflow-hidden">
                <div className="bg-muted animate-pulse h-48"></div>
                <CardContent className="p-6 space-y-3">
                  <div className="h-4 bg-muted animate-pulse rounded"></div>
                  <div className="h-4 bg-muted animate-pulse rounded w-3/4"></div>
                  <div className="h-3 bg-muted animate-pulse rounded w-1/2"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : activities.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              Tidak ada kegiatan untuk kategori ini.
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-2 hover:border-primary transition-all hover:shadow-lg group h-full">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={activity.image_url || 'https://images.pexels.com/photos/8923089/pexels-photo-8923089.jpeg?auto=compress&cs=tinysrgb&w=800'}
                      alt={activity.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge className={`${getCategoryColor(activity.category)} text-white border-0`}>
                        {activity.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 line-clamp-2">
                      {activity.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">
                      {activity.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {format(new Date(activity.date), 'dd MMMM yyyy', { locale: id })}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-center text-primary-foreground"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ikuti Kegiatan Kami
          </h2>
          <p className="mb-6 max-w-2xl mx-auto opacity-90">
            Daftarkan putra-putri Anda sekarang dan biarkan mereka mengikuti berbagai kegiatan menarik yang kami selenggarakan.
          </p>
          <a
            href="/pendaftaran"
            className="inline-flex items-center justify-center rounded-md bg-white text-primary px-8 py-3 text-sm font-medium shadow transition-colors hover:bg-white/90"
          >
            Daftar Sekarang
          </a>
        </motion.div>
      </SectionWrapper>
    </>
  );
}
