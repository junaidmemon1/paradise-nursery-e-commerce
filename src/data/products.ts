export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: 'indoor' | 'outdoor' | 'pots' | 'accessories';
  description: string;
  careInfo: {
    light: string;
    water: string;
    humidity: string;
    temperature: string;
  };
  inStock: boolean;
  featured?: boolean;
  bestseller?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Monstera Deliciosa',
    price: 45,
    originalPrice: 55,
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=800&q=80',
    category: 'indoor',
    description: 'The iconic Swiss Cheese Plant with its stunning fenestrated leaves. A statement piece for any room that brings tropical vibes to your home.',
    careInfo: {
      light: 'Bright indirect light',
      water: 'Weekly, allow soil to dry',
      humidity: 'Medium to high',
      temperature: '65-85°F',
    },
    inStock: true,
    featured: true,
    bestseller: true,
  },
  {
    id: '2',
    name: 'Fiddle Leaf Fig',
    price: 65,
    image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?w=800&q=80',
    category: 'indoor',
    description: 'The Instagram-famous houseplant with large, violin-shaped leaves. Perfect for creating a bold statement in bright rooms.',
    careInfo: {
      light: 'Bright indirect light',
      water: 'Every 1-2 weeks',
      humidity: 'Medium',
      temperature: '60-75°F',
    },
    inStock: true,
    featured: true,
  },
  {
    id: '3',
    name: 'Snake Plant',
    price: 28,
    image: 'https://images.unsplash.com/photo-1593482892540-7adc14a19a83?w=800&q=80',
    category: 'indoor',
    description: 'Nearly indestructible and perfect for beginners. Known for its air-purifying qualities and striking vertical leaves.',
    careInfo: {
      light: 'Low to bright indirect',
      water: 'Every 2-3 weeks',
      humidity: 'Low',
      temperature: '55-85°F',
    },
    inStock: true,
    bestseller: true,
  },
  {
    id: '4',
    name: 'Peace Lily',
    price: 32,
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=800&q=80',
    category: 'indoor',
    description: 'Elegant white blooms and glossy leaves. One of the best plants for purifying indoor air and thriving in low light.',
    careInfo: {
      light: 'Low to medium indirect',
      water: 'Weekly',
      humidity: 'Medium to high',
      temperature: '65-80°F',
    },
    inStock: true,
  },
  {
    id: '5',
    name: 'Bird of Paradise',
    price: 85,
    originalPrice: 95,
    image: 'https://images.unsplash.com/photo-1620127682229-33388276e540?w=800&q=80',
    category: 'indoor',
    description: 'A tropical showstopper with large banana-like leaves. Creates an instant jungle atmosphere in any space.',
    careInfo: {
      light: 'Bright direct to indirect',
      water: 'Weekly',
      humidity: 'Medium to high',
      temperature: '65-80°F',
    },
    inStock: true,
    featured: true,
  },
  {
    id: '6',
    name: 'Lavender',
    price: 18,
    image: 'https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?w=800&q=80',
    category: 'outdoor',
    description: 'Fragrant purple blooms that attract pollinators. Perfect for gardens, patios, and creating a calming atmosphere.',
    careInfo: {
      light: 'Full sun',
      water: 'Every 1-2 weeks',
      humidity: 'Low',
      temperature: '40-70°F',
    },
    inStock: true,
    featured: true,
  },
  {
    id: '7',
    name: 'Japanese Maple',
    price: 120,
    image: 'https://images.unsplash.com/photo-1601662528567-526cd06f6582?w=800&q=80',
    category: 'outdoor',
    description: 'Stunning ornamental tree with delicate, lace-like foliage. Brilliant fall colors make it a garden centerpiece.',
    careInfo: {
      light: 'Partial shade to full sun',
      water: 'Regular watering',
      humidity: 'Medium',
      temperature: '20-80°F',
    },
    inStock: true,
  },
  {
    id: '8',
    name: 'Hydrangea',
    price: 35,
    image: 'https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=800&q=80',
    category: 'outdoor',
    description: 'Large, colorful flower clusters that bloom all summer. A classic garden favorite that adds charm to any landscape.',
    careInfo: {
      light: 'Partial shade',
      water: 'Regular, keep moist',
      humidity: 'Medium to high',
      temperature: '50-75°F',
    },
    inStock: true,
    bestseller: true,
  },
  {
    id: '9',
    name: 'Terracotta Classic Pot',
    price: 24,
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&q=80',
    category: 'pots',
    description: 'Timeless terracotta pot with excellent drainage. The porous material helps regulate soil moisture for healthy roots.',
    careInfo: {
      light: 'N/A',
      water: 'N/A',
      humidity: 'N/A',
      temperature: 'N/A',
    },
    inStock: true,
    bestseller: true,
  },
  {
    id: '10',
    name: 'Modern White Ceramic',
    price: 38,
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=800&q=80',
    category: 'pots',
    description: 'Sleek minimalist ceramic pot with a matte white finish. Includes drainage hole and saucer for easy plant care.',
    careInfo: {
      light: 'N/A',
      water: 'N/A',
      humidity: 'N/A',
      temperature: 'N/A',
    },
    inStock: true,
    featured: true,
  },
  {
    id: '11',
    name: 'Woven Basket Planter',
    price: 32,
    image: 'https://images.unsplash.com/photo-1604762524889-3e2fcc145683?w=800&q=80',
    category: 'pots',
    description: 'Handwoven seagrass basket planter adds natural texture. Perfect for medium to large plants with a boho aesthetic.',
    careInfo: {
      light: 'N/A',
      water: 'N/A',
      humidity: 'N/A',
      temperature: 'N/A',
    },
    inStock: true,
  },
  {
    id: '12',
    name: 'Premium Potting Mix',
    price: 16,
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
    category: 'accessories',
    description: 'All-purpose potting mix with perlite and organic matter. Provides excellent drainage and nutrients for healthy plant growth.',
    careInfo: {
      light: 'N/A',
      water: 'N/A',
      humidity: 'N/A',
      temperature: 'N/A',
    },
    inStock: true,
    bestseller: true,
  },
  {
    id: '13',
    name: 'Plant Care Tool Set',
    price: 28,
    image: 'https://images.unsplash.com/photo-1617160896012-58b43f7d4fd4?w=800&q=80',
    category: 'accessories',
    description: 'Essential 5-piece tool set including trowel, rake, pruning shears, spray bottle, and gloves. Perfect for plant parents.',
    careInfo: {
      light: 'N/A',
      water: 'N/A',
      humidity: 'N/A',
      temperature: 'N/A',
    },
    inStock: true,
  },
  {
    id: '14',
    name: 'Macrame Plant Hanger',
    price: 22,
    image: 'https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?w=800&q=80',
    category: 'accessories',
    description: 'Handcrafted macrame hanger in natural cotton. Adds bohemian charm while saving floor space for your plants.',
    careInfo: {
      light: 'N/A',
      water: 'N/A',
      humidity: 'N/A',
      temperature: 'N/A',
    },
    inStock: true,
    featured: true,
  },
  {
    id: '15',
    name: 'Pothos Golden',
    price: 22,
    image: 'https://images.unsplash.com/photo-1600411833196-7c1f6b1a8b90?w=800&q=80',
    category: 'indoor',
    description: 'Fast-growing trailing vine with heart-shaped golden-green leaves. Incredibly easy to care for and looks great in hanging baskets.',
    careInfo: {
      light: 'Low to bright indirect',
      water: 'Every 1-2 weeks',
      humidity: 'Low to medium',
      temperature: '60-80°F',
    },
    inStock: true,
  },
  {
    id: '16',
    name: 'Rose Bush',
    price: 42,
    image: 'https://images.unsplash.com/photo-1518882605630-8eb548dce8c3?w=800&q=80',
    category: 'outdoor',
    description: 'Classic garden rose with fragrant blooms. A timeless addition to any outdoor space that flowers throughout the season.',
    careInfo: {
      light: 'Full sun',
      water: 'Regular watering',
      humidity: 'Medium',
      temperature: '40-90°F',
    },
    inStock: true,
  },
];

export const categories = [
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
