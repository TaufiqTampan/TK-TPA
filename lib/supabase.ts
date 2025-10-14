import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Registration = {
  id: string;
  nama_lengkap: string;
  umur: number;
  jenis_kelamin: string;
  alamat: string;
  nama_orang_tua: string;
  nomor_hp: string;
  status: string;
  created_at: string;
};

export type Activity = {
  id: string;
  title: string;
  description: string;
  image_url: string | null;
  date: string;
  category: string;
  created_at: string;
};

export type Testimonial = {
  id: string;
  nama_orang_tua: string;
  nama_anak: string;
  testimoni: string;
  rating: number;
  is_published: boolean;
  created_at: string;
};
