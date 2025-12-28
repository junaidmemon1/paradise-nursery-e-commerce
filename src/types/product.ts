export interface Product {
  id: string;
  name: string;
  price: number;
  original_price?: number | null;
  image_url: string;
  category: string;
  description: string | null;
  care_level?: string | null;
  light?: string | null;
  water?: string | null;
  stock: number;
  featured?: boolean | null;
  created_at?: string;
  updated_at?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: 'indoor',
    name: 'Indoor Plants',
    description: 'Transform your home into a lush oasis',
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=800&q=80',
  },
  {
    id: 'outdoor',
    name: 'Outdoor Plants',
    description: 'Create your dream garden paradise',
    image: 'https://images.unsplash.com/photo-1558693168-c370615b54e0?w=800&q=80',
  },
  {
    id: 'pots',
    name: 'Decorative Pots',
    description: 'Style meets functionality',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&q=80',
  },
  {
    id: 'accessories',
    name: 'Accessories',
    description: 'Everything you need for plant care',
    image: 'https://images.unsplash.com/photo-1617160896012-58b43f7d4fd4?w=800&q=80',
  },
];
