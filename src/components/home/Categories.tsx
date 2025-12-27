import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories } from '@/data/products';

const PLACEHOLDER_IMAGE = 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=800&q=80';

const CategoryCard = ({ category, index }: { category: typeof categories[0]; index: number }) => {
  const [imgSrc, setImgSrc] = useState(category.image);
  const [imgError, setImgError] = useState(false);

  const handleImageError = () => {
    if (!imgError) {
      setImgError(true);
      setImgSrc(PLACEHOLDER_IMAGE);
    }
  };

  return (
    <Link
      to={`/products?category=${category.id}`}
      className="group relative overflow-hidden rounded-2xl animate-fade-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image */}
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={imgSrc}
          alt={category.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={handleImageError}
          loading="lazy"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="font-display text-xl font-semibold text-primary-foreground">
          {category.name}
        </h3>
        <p className="mt-1 text-sm text-primary-foreground/70">
          {category.description}
        </p>
        <div className="mt-3 flex items-center gap-2 text-sm font-medium text-sage-light transition-all group-hover:gap-3">
          Shop Now
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  );
};

const Categories = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-main">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Shop by Category
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Browse our carefully curated collections to find the perfect addition to your space
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
