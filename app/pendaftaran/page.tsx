'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useToast } from '@/hooks/use-toast';
import { submitRegistration } from '@/lib/api';
import { CheckCircle, MapPin, Phone, User, Users } from 'lucide-react';

const formSchema = z.object({
  nama_lengkap: z.string().min(3, 'Nama lengkap harus diisi'),
  umur: z.coerce.number().min(3, 'Umur harus diisi').max(15, 'Umur tidak valid'),
  jenis_kelamin: z.string({ required_error: 'Jenis kelamin harus dipilih' }),
  alamat: z.string().min(10, 'Alamat harus diisi'),
  nama_orang_tua: z.string().min(3, 'Nama orang tua harus diisi'),
  nomor_hp: z.string().min(10, 'Nomor HP harus diisi'),
});

export default function PendaftaranPage() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nama_lengkap: '',
      umur: undefined,
      alamat: '',
      nama_orang_tua: '',
      nomor_hp: '',
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = form;

  const jenisKelamin = watch('jenis_kelamin');

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setLoading(true);
    const result = await submitRegistration(data);
    setLoading(false);

    if (result.success) {
      setIsSuccess(true);
      toast({
        title: 'Pendaftaran Berhasil',
        description: 'Terima kasih telah mendaftar. Kami akan segera menghubungi Anda.',
      });
      reset();
    } else {
      toast({
        title: 'Pendaftaran Gagal',
        description: 'Terjadi kesalahan saat mengirim data. Silakan coba lagi.',
        variant: 'destructive',
      });
    }
  };

  const steps = [
    {
      icon: User,
      title: 'Isi Formulir',
      description: 'Lengkapi data pendaftaran dengan benar',
    },
    {
      icon: CheckCircle,
      title: 'Verifikasi',
      description: 'Tim kami akan menghubungi Anda',
    },
    {
      icon: Users,
      title: 'Mulai Belajar',
      description: 'Bergabung dengan santri lainnya',
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Pendaftaran Santri Baru
            </h1>
            <p className="text-lg text-muted-foreground">
              Daftarkan putra-putri Anda untuk mengikuti program pembelajaran Al-Quran
              dan pendidikan karakter Islami di TK/TPA Al-Ikhlas.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionWrapper className="bg-white">
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center border-2 hover:border-primary transition-colors">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="font-semibold text-sm text-primary mb-1">
                    Langkah {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-2 border-primary">
                <CardContent className="p-12 text-center">
                  <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-12 w-12 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Pendaftaran Berhasil!</h2>
                  <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                    Terima kasih telah mendaftarkan putra-putri Anda di TK/TPA Al-Ikhlas.
                    Tim kami akan segera menghubungi Anda untuk proses selanjutnya.
                  </p>
                  <Button
                    onClick={() => setIsSuccess(false)}
                    className="bg-primary hover:bg-primary/90"
                  >
                    Daftar Lagi
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">Formulir Pendaftaran</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Mohon isi semua data dengan lengkap dan benar
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="nama_lengkap">
                        Nama Lengkap Anak <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="nama_lengkap"
                        placeholder="Masukkan nama lengkap anak"
                        {...register('nama_lengkap')}
                      />
                      {errors.nama_lengkap && (
                        <p className="text-sm text-destructive">
                          {errors.nama_lengkap.message}
                        </p>
                      )}
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="umur">
                          Umur (tahun) <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="umur"
                          type="number"
                          min="3"
                          max="15"
                          placeholder="Contoh: 7"
                          {...register('umur')}
                        />
                        {errors.umur && (
                          <p className="text-sm text-destructive">{errors.umur.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="jenis_kelamin">
                          Jenis Kelamin <span className="text-destructive">*</span>
                        </Label>
                        <Select
                          onValueChange={(value) => setValue('jenis_kelamin', value)}
                          value={jenisKelamin}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Pilih jenis kelamin" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Laki-laki">Laki-laki</SelectItem>
                            <SelectItem value="Perempuan">Perempuan</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.jenis_kelamin && (
                          <p className="text-sm text-destructive">
                            {errors.jenis_kelamin.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="alamat">
                        Alamat Lengkap <span className="text-destructive">*</span>
                      </Label>
                      <Textarea
                        id="alamat"
                        placeholder="Masukkan alamat lengkap"
                        rows={3}
                        {...register('alamat')}
                      />
                      {errors.alamat && (
                        <p className="text-sm text-destructive">{errors.alamat.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="nama_orang_tua">
                        Nama Orang Tua/Wali <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="nama_orang_tua"
                        placeholder="Masukkan nama orang tua/wali"
                        {...register('nama_orang_tua')}
                      />
                      {errors.nama_orang_tua && (
                        <p className="text-sm text-destructive">
                          {errors.nama_orang_tua.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="nomor_hp">
                        Nomor HP/WhatsApp <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="nomor_hp"
                        type="tel"
                        placeholder="Contoh: 081234567890"
                        {...register('nomor_hp')}
                      />
                      {errors.nomor_hp && (
                        <p className="text-sm text-destructive">
                          {errors.nomor_hp.message}
                        </p>
                      )}
                    </div>

                    <div className="bg-muted/50 border border-border rounded-lg p-4">
                      <h4 className="font-semibold text-sm mb-2">Informasi Penting:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Pendaftaran gratis tanpa biaya administrasi</li>
                        <li>• Tim kami akan menghubungi dalam 1-2 hari kerja</li>
                        <li>• Pastikan nomor HP dapat dihubungi</li>
                      </ul>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90"
                      disabled={loading}
                    >
                      {loading ? 'Mengirim...' : 'Daftar Sekarang'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 grid md:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          <Card className="text-center border-2">
            <CardContent className="p-6">
              <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Hubungi Kami</h4>
              <p className="text-sm text-muted-foreground">+62 812-3456-7890</p>
            </CardContent>
          </Card>
          <Card className="text-center border-2">
            <CardContent className="p-6">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Lokasi TPA</h4>
              <p className="text-sm text-muted-foreground">Jl. Pendidikan No. 123</p>
            </CardContent>
          </Card>
          <Card className="text-center border-2">
            <CardContent className="p-6">
              <Users className="h-8 w-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Kunjungi Kami</h4>
              <p className="text-sm text-muted-foreground">Senin - Jumat, 14.00-17.00</p>
            </CardContent>
          </Card>
        </motion.div>
      </SectionWrapper>
    </>
  );
}