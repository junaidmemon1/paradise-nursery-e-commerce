import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Truck, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 leaf-pattern opacity-50" />
      
      {/* Main Hero */}
      <div className="gradient-hero relative">
        <div className="container-main py-16 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Content */}
            <div className="relative z-10 text-center lg:text-left">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 backdrop-blur-sm">
                <Leaf className="h-4 w-4 text-sage-light" />
                <span className="text-sm font-medium text-primary-foreground/90">
                  New Spring Collection
                </span>
              </div>
              
              <h1 className="font-display text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
                Bring Nature
                <span className="block text-sage-light">Home</span>
              </h1>
              
              <p className="mx-auto mt-6 max-w-xl text-lg text-primary-foreground/80 lg:mx-0">
                Transform your living space into a lush green paradise. Discover our curated collection of beautiful indoor and outdoor plants.
              </p>
              
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/products">
                    Shop Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline-hero" size="xl" asChild>
                  <Link to="/products?category=indoor">
                    Explore Indoor
                  </Link>
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="mt-12 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
                <div className="flex items-center gap-2 text-primary-foreground/70">
                  <Truck className="h-5 w-5" />
                  <span className="text-sm font-medium">Free Shipping $50+</span>
                </div>
                <div className="flex items-center gap-2 text-primary-foreground/70">
                  <Shield className="h-5 w-5" />
                  <span className="text-sm font-medium">30-Day Guarantee</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative hidden lg:block">
              <div className="relative aspect-square">
                <div className="absolute inset-0 animate-float rounded-full bg-sage/20 blur-3xl" />
                <img
                  src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=800&q=80"
                  alt="Beautiful indoor plant"
                  className="relative z-10 h-full w-full rounded-3xl object-cover shadow-2xl"
                />
                
                {/* Floating Card */}
                <div className="absolute -left-8 bottom-12 z-20 rounded-2xl bg-background/95 p-4 shadow-card backdrop-blur-sm animate-scale-in" style={{ animationDelay: '0.5s' }}>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Leaf className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">500+ Plants</p>
                      <p className="text-xs text-muted-foreground">In our collection</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
