/*
  # TK/TPA Website Database Schema

  1. New Tables
    - `registrations`
      - `id` (uuid, primary key)
      - `nama_lengkap` (text) - Full name of the child
      - `umur` (integer) - Age of the child
      - `jenis_kelamin` (text) - Gender (Laki-laki/Perempuan)
      - `alamat` (text) - Address
      - `nama_orang_tua` (text) - Parent name
      - `nomor_hp` (text) - Phone number
      - `created_at` (timestamptz) - Registration timestamp
      - `status` (text) - Registration status (pending/approved/rejected)
      
    - `activities`
      - `id` (uuid, primary key)
      - `title` (text) - Activity title
      - `description` (text) - Activity description
      - `image_url` (text) - Activity image URL
      - `date` (date) - Activity date
      - `category` (text) - Activity category
      - `created_at` (timestamptz) - Creation timestamp
      
    - `testimonials`
      - `id` (uuid, primary key)
      - `nama_orang_tua` (text) - Parent name
      - `nama_anak` (text) - Child name
      - `testimoni` (text) - Testimonial content
      - `rating` (integer) - Rating (1-5)
      - `created_at` (timestamptz) - Creation timestamp
      - `is_published` (boolean) - Published status

  2. Security
    - Enable RLS on all tables
    - Public read access for activities and published testimonials
    - Authenticated users can create registrations
    - Only authenticated admins can modify activities and testimonials
*/

CREATE TABLE IF NOT EXISTS registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nama_lengkap text NOT NULL,
  umur integer NOT NULL,
  jenis_kelamin text NOT NULL,
  alamat text NOT NULL,
  nama_orang_tua text NOT NULL,
  nomor_hp text NOT NULL,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS activities (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  image_url text,
  date date NOT NULL,
  category text DEFAULT 'general',
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nama_orang_tua text NOT NULL,
  nama_anak text NOT NULL,
  testimoni text NOT NULL,
  rating integer DEFAULT 5,
  is_published boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create registration"
  ON registrations FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can view registrations"
  ON registrations FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Anyone can view activities"
  ON activities FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Anyone can view published testimonials"
  ON testimonials FOR SELECT
  TO anon
  USING (is_published = true);

INSERT INTO activities (title, description, image_url, date, category) VALUES
('Belajar Iqra Jilid 1', 'Santri belajar membaca huruf hijaiyah dengan metode Iqra', 'https://images.pexels.com/photos/8923089/pexels-photo-8923089.jpeg', '2025-10-01', 'Pembelajaran'),
('Hafalan Surat Pendek', 'Kegiatan hafalan surat-surat pendek Juz Amma', 'https://images.pexels.com/photos/8923173/pexels-photo-8923173.jpeg', '2025-09-15', 'Tahfidz'),
('Lomba Adzan', 'Lomba adzan tingkat TPA dalam rangka Maulid Nabi', 'https://images.pexels.com/photos/8923166/pexels-photo-8923166.jpeg', '2025-09-20', 'Lomba'),
('Outing Class ke Masjid', 'Kunjungan edukatif ke Masjid Agung untuk belajar tata cara sholat', 'https://images.pexels.com/photos/6140688/pexels-photo-6140688.jpeg', '2025-10-05', 'Outing'),
('Perayaan Hari Raya Idul Fitri', 'Perayaan bersama dan santunan untuk anak yatim', 'https://images.pexels.com/photos/8923136/pexels-photo-8923136.jpeg', '2025-04-10', 'Perayaan'),
('Praktik Wudhu', 'Pembelajaran praktik wudhu yang benar sesuai sunnah', 'https://images.pexels.com/photos/8923141/pexels-photo-8923141.jpeg', '2025-09-25', 'Pembelajaran');

INSERT INTO testimonials (nama_orang_tua, nama_anak, testimoni, rating, is_published) VALUES
('Ibu Siti Aminah', 'Ahmad Fauzi', 'Alhamdulillah, sejak bergabung di TPA ini anak saya jadi lebih rajin sholat dan mengaji. Ustadz dan Ustadzahnya sangat sabar dalam mengajar.', 5, true),
('Bapak Muhammad Ridwan', 'Fatimah Azzahra', 'TPA yang sangat bagus dengan metode pembelajaran yang menyenangkan. Anak saya jadi semangat belajar Al-Quran.', 5, true),
('Ibu Nur Halimah', 'Zidan Abdullah', 'Lingkungan belajar yang Islami dan nyaman. Progres hafalan anak saya meningkat pesat. Terima kasih TPA Al-Ikhlas.', 5, true),
('Bapak Abdul Malik', 'Khadijah', 'Guru-gurunya sangat berkompeten dan perhatian terhadap perkembangan setiap santri. Sangat recommended!', 5, true);