import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
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
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/40" />
      <div className="absolute top-20 left-1/4 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 right-1/4 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
      
      <div className="container-main relative">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center justify-between gap-6 lg:flex-row">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent mb-4 animate-fade-down">
              <Sparkles className="h-4 w-4" />
              Hand-Picked Selection
            </span>
            <h2 className="font-display text-4xl font-bold text-foreground sm:text-5xl animate-fade-up">
              Featured <span className="text-gradient">Plants</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-lg animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Our most loved plants, carefully selected for quality and beauty
            </p>
          </div>
          <Button 
            variant="outline" 
            size="lg" 
            asChild 
            className="group hover-lift animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            <Link to="/products">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* Products Grid */}
        {isLoading ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="rounded-3xl bg-card p-5 shadow-card">
                <Skeleton className="aspect-square w-full rounded-2xl" />
                <Skeleton className="mt-5 h-4 w-2/3" />
                <Skeleton className="mt-2 h-5 w-3/4" />
                <Skeleton className="mt-3 h-8 w-1/2" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 stagger-grid">
            {products.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={toProductCardFormat(product)} />
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 text-center animate-fade-up" style={{ animationDelay: '0.5s' }}>
          <p className="text-muted-foreground mb-4">
            Can't find what you're looking for?
          </p>
          <Button variant="default" size="lg" asChild className="btn-ripple">
            <Link to="/contact">
              Contact Us for Custom Orders
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
