import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Trees, Flower2, Wrench } from 'lucide-react';
import { categories } from '@/data/products';

const PLACEHOLDER_IMAGE = 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=800&q=80';

const categoryIcons: Record<string, React.ElementType> = {
  indoor: Leaf,
  outdoor: Trees,
  pots: Flower2,
  accessories: Wrench,
};

const CategoryCard = ({ category, index }: { category: typeof categories[0]; index: number }) => {
  const [imgSrc, setImgSrc] = useState(category.image);
  const [imgError, setImgError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const IconComponent = categoryIcons[category.id] || Leaf;

  const handleImageError = () => {
    if (!imgError) {
      setImgError(true);
      setImgSrc(PLACEHOLDER_IMAGE);
    }
  };

  return (
    <Link
      to={`/products?category=${category.id}`}
      className="group relative overflow-hidden rounded-3xl card-premium"
      style={{ animationDelay: `${index * 0.15}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={imgSrc}
          alt={category.name}
          className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
          onError={handleImageError}
          loading="lazy"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent transition-opacity duration-500" />
      
      {/* Animated accent line */}
      <div 
        className={`absolute top-0 left-0 h-1 bg-accent transition-all duration-500 ${
          isHovered ? 'w-full' : 'w-0'
        }`} 
      />

      {/* Icon Badge */}
      <div className="absolute top-4 right-4 flex h-12 w-12 items-center justify-center rounded-full glass opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
        <IconComponent className="h-5 w-5 text-primary-foreground" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
        <span className="inline-block rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent mb-3 animate-fade-in">
          Explore
        </span>
        <h3 className="font-display text-2xl font-bold text-primary-foreground lg:text-3xl">
          {category.name}
        </h3>
        <p className="mt-2 text-sm text-primary-foreground/70 line-clamp-2">
          {category.description}
        </p>
        <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-sage-light transition-all duration-300 group-hover:gap-4">
          <span>Shop Now</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
        </div>
      </div>
    </Link>
  );
};

const Categories = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-sage/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-accent/5 blur-3xl" />
      
      <div className="container-main relative">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground mb-4 animate-fade-down">
            <Leaf className="h-4 w-4 text-primary" />
            Curated Collections
          </span>
          <h2 className="font-display text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl animate-fade-up">
            Shop by <span className="text-gradient">Category</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Browse our carefully curated collections to find the perfect addition to your space
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 stagger-grid">
          {categories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
