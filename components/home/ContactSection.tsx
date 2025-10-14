'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function ContactSection() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Alamat',
      content: 'Jl. Pendidikan No. 123, Jakarta Selatan 12345',
    },
    {
      icon: Phone,
      title: 'Telepon',
      content: '+62 812-3456-7890',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@tktpalikhlas.com',
    },
    {
      icon: Clock,
      title: 'Jam Operasional',
      content: 'Senin - Jumat: 14.00 - 17.00 WIB\nSabtu - Minggu: 08.00 - 12.00 WIB',
    },
  ];

  return (
    <SectionWrapper id="kontak" className="bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Hubungi Kami</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Ada pertanyaan? Jangan ragu untuk menghubungi kami atau kunjungi langsung lokasi TPA kami.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {contactInfo.map((info, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-2 hover:border-primary transition-colors">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{info.title}</h3>
                <p className="text-sm text-muted-foreground whitespace-pre-line">{info.content}</p>
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
        className="rounded-2xl overflow-hidden shadow-lg border-2 border-border"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.066788102537!2d106.79324431476888!3d-6.251485795479594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf5ae11694c2!2sIstana%20Negara!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>
    </SectionWrapper>
  );
}
