import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/products/ProductCard';
import { useFeaturedProducts, Product } from '@/hooks/useProducts';
import { Skeleton } from '@/components/ui/skeleton';

const FeaturedProducts = () => {
  const { data: products = [], isLoading } = useFeaturedProducts();

  // Helper to convert DB product to ProductCard format
  const toProductCardFormat = (product: Product) => ({
    id: product.id,
    name: product.name,
    price: product.price,
    originalPrice: product.original_price ?? undefined,
    image: product.image_url,
    category: product.category as 'indoor' | 'outdoor' | 'pots' | 'accessories',
    description: product.description || '',
    careInfo: {
      light: product.light || 'N/A',
      water: product.water || 'N/A',
      humidity: 'N/A',
      temperature: 'N/A',
    },
    inStock: product.stock > 0,
    featured: product.featured ?? false,
    bestseller: false,
  });

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

        {isLoading ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="rounded-2xl bg-card p-4">
                <Skeleton className="aspect-square w-full rounded-xl" />
                <Skeleton className="mt-4 h-4 w-3/4" />
                <Skeleton className="mt-2 h-6 w-1/2" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.slice(0, 4).map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard product={toProductCardFormat(product)} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
