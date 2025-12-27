import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/products/ProductCard';
import { products } from '@/data/products';

const FeaturedProducts = () => {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="bg-secondary/30 py-16 lg:py-24">
      <div className="container-main">
        <div className="mb-12 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Featured Plants
            </h2>
            <p className="mt-2 text-muted-foreground">
              Hand-picked favorites from our collection
            </p>
          </div>
          <Button variant="outline" asChild className="gap-2">
            <Link to="/products">
              View All
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
