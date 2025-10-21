
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000/api/v1';

async function fetcher(url: string, options: RequestInit = {}) {
  try {
    const response = await fetch(`${API_BASE_URL}${url}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      console.error('API request failed:', response.status, response.statusText);
      // You might want to throw an error here or handle it differently
      return { success: false, error: `Request failed with status ${response.status}` };
    }

    const data = await response.json();
    return { success: true, data: data.data }; // Laravel wraps data in a "data" key for resource collections
  } catch (error) {
    console.error('API fetch error:', error);
    return { success: false, error: 'An unexpected error occurred.' };
  }
}

// Type definitions based on your Laravel models
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

export type RegistrationData = {
  nama_lengkap: string;
  umur: number;
  jenis_kelamin: string;
  alamat: string;
  nama_orang_tua: string;
  nomor_hp: string;
};

// API functions
export const getActivities = (category?: string) => {
  let url = '/kegiatan';
  if (category && category !== 'all') {
    url += `?category=${category}`;
  }
  return fetcher(url);
};

export const getTestimonials = () => {
    // Assuming you have a 'testimonials' endpoint in your Laravel backend
    // and it's public. If not, you'll need to add it to api.php
    // For now, I'll mock a similar structure to what you had.
    // You should create a 'TestimonialController' and a route for it.
    // Since there is no 'galeri' or 'berita' controller used in the frontend,
    // I will assume that the testimonials are fetched from the 'galeri' endpoint.
    return fetcher('/galeri');
};

export const submitRegistration = (data: RegistrationData) => {
  // The registration endpoint in Laravel is likely /register, but it's for user auth.
  // You probably need a different endpoint for student registration, e.g., /pendaftaran
  // I'll assume the endpoint is '/siswa' based on your api.php
  return fetcher('/siswa', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};
