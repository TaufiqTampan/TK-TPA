import Link from 'next/link';
import { BookOpen, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-bold text-xl">
              <BookOpen className="h-6 w-6" />
              <span>TK/TPA Al-Ikhlas</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Lembaga pendidikan Islam untuk anak usia dini yang berfokus pada pembelajaran Al-Quran dan pembentukan akhlak mulia.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Menu</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/profil" className="hover:text-secondary transition-colors">
                  Profil Lembaga
                </Link>
              </li>
              <li>
                <Link href="/program" className="hover:text-secondary transition-colors">
                  Program Pembelajaran
                </Link>
              </li>
              <li>
                <Link href="/kegiatan" className="hover:text-secondary transition-colors">
                  Kegiatan
                </Link>
              </li>
              <li>
                <Link href="/pendaftaran" className="hover:text-secondary transition-colors">
                  Pendaftaran
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Kontak</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Jl. Pendidikan No. 123, Jakarta Selatan</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@tktpalikhlas.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Ikuti Kami</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="hover:text-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:text-secondary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} TK/TPA Al-Ikhlas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
