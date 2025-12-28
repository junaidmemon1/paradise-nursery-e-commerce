import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Truck, Shield, Sparkles, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 leaf-pattern opacity-30" />
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-sage/20 blur-3xl animate-float-slow" />
      <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-float-delayed" />
      
      {/* Main Hero */}
      <div className="gradient-hero relative">
        <div className="container-main py-20 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Content */}
            <div className="relative z-10 text-center lg:text-left">
              {/* Badge with animation */}
              <div 
                className="mb-8 inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 animate-fade-down"
                style={{ animationDelay: '0.1s' }}
              >
                <Sparkles className="h-4 w-4 text-accent animate-pulse-slow" />
                <span className="text-sm font-medium text-primary-foreground/90">
                  New Spring Collection 2024
                </span>
              </div>
              
              <h1 
                className="font-display text-5xl font-bold leading-tight text-primary-foreground sm:text-6xl lg:text-7xl xl:text-8xl animate-fade-up"
                style={{ animationDelay: '0.2s' }}
              >
                Bring Nature
                <span className="block text-sage-light mt-2 animate-fade-up" style={{ animationDelay: '0.4s' }}>
                  Home
                </span>
              </h1>
              
              <p 
                className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-primary-foreground/80 lg:mx-0 lg:text-xl animate-fade-up"
                style={{ animationDelay: '0.5s' }}
              >
                Transform your living space into a lush green paradise. Discover our curated collection of beautiful indoor and outdoor plants.
              </p>
              
              <div 
                className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start animate-fade-up"
                style={{ animationDelay: '0.6s' }}
              >
                <Button variant="hero" size="xl" asChild className="group btn-ripple">
                  <Link to="/products">
                    Shop Now
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="outline-hero" size="xl" asChild className="hover-lift">
                  <Link to="/products?category=indoor">
                    Explore Indoor
                  </Link>
                </Button>
              </div>

              {/* Trust Badges with stagger animation */}
              <div 
                className="mt-14 flex flex-wrap items-center justify-center gap-8 lg:justify-start animate-fade-up"
                style={{ animationDelay: '0.8s' }}
              >
                <div className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors group">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 group-hover:bg-primary-foreground/20 transition-colors">
                    <Truck className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium">Free Shipping $50+</span>
                </div>
                <div className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors group">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 group-hover:bg-primary-foreground/20 transition-colors">
                    <Shield className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium">30-Day Guarantee</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative hidden lg:block">
              <div className="relative aspect-square">
                {/* Animated blobs */}
                <div className="absolute -inset-4 rounded-full bg-sage/30 blur-3xl animate-float blob" />
                <div className="absolute inset-8 rounded-full bg-primary/20 blur-2xl animate-float-delayed" />
                
                {/* Main image */}
                <img
                  src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=800&q=80"
                  alt="Beautiful indoor plant"
                  className="relative z-10 h-full w-full rounded-3xl object-cover shadow-3d animate-scale-in"
                  style={{ animationDelay: '0.3s' }}
                />
                
                {/* Decorative ring */}
                <div className="absolute -inset-2 z-0 rounded-3xl border-2 border-dashed border-primary-foreground/20 animate-spin-slow" />
                
                {/* Floating Cards */}
                <div 
                  className="absolute -left-8 bottom-16 z-20 glass rounded-2xl p-5 shadow-3d animate-float"
                  style={{ animationDelay: '0.6s' }}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20 animate-pulse-glow">
                      <Leaf className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-xl font-bold text-primary-foreground">500+</p>
                      <p className="text-sm text-primary-foreground/70">Plant Species</p>
                    </div>
                  </div>
                </div>

                {/* Top right floating card */}
                <div 
                  className="absolute -right-4 top-12 z-20 glass rounded-2xl p-4 shadow-3d animate-float-delayed"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-primary-foreground">4.9/5</span>
                  </div>
                  <p className="mt-1 text-xs text-primary-foreground/70">2,500+ Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path 
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
              fill="hsl(var(--background))"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
