import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Plant Parent',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
    content: 'Paradise Nursery has completely transformed my apartment. The plants arrive healthy and beautifully packaged. The care guides are incredibly helpful!',
    rating: 5,
    plantPurchased: 'Monstera Deliciosa',
  },
  {
    id: 2,
    name: 'James Chen',
    role: 'Interior Designer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
    content: 'I recommend Paradise Nursery to all my clients. Their selection is incredible and the quality is consistently excellent. A go-to for every project.',
    rating: 5,
    plantPurchased: 'Fiddle Leaf Fig',
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Home Gardener',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80',
    content: 'Best online plant shop I\'ve found! Fast shipping, beautiful packaging, and the plants are always in perfect condition. Customer service is exceptional.',
    rating: 5,
    plantPurchased: 'Snake Plant',
  },
  {
    id: 4,
    name: 'Michael Torres',
    role: 'Architect',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80',
    content: 'The quality of plants from Paradise Nursery is unmatched. They understand that plants are living architecture. Highly recommended for professionals.',
    rating: 5,
    plantPurchased: 'Bird of Paradise',
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />
      
      <div className="container-main relative">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground mb-4 animate-fade-down">
            <Star className="h-4 w-4 text-accent fill-accent" />
            Customer Love
          </span>
          <h2 className="font-display text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl animate-fade-up">
            What Our <span className="text-gradient">Customers</span> Say
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Join thousands of happy plant parents who have transformed their spaces
          </p>
        </div>

        {/* Testimonials Carousel - Desktop */}
        <div className="hidden lg:grid gap-6 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group relative rounded-3xl bg-card p-8 shadow-card hover-lift transition-all duration-500"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Quote icon */}
              <div className="absolute -top-4 right-8 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                <Quote className="h-4 w-4" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-4">
                "{testimonial.content}"
              </p>

              {/* Plant badge */}
              <div className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground mb-6">
                Bought: {testimonial.plantPurchased}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-14 w-14 rounded-full object-cover ring-2 ring-primary/20 ring-offset-2 ring-offset-background"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel - Mobile */}
        <div className="lg:hidden">
          <div className="relative overflow-hidden rounded-3xl bg-card p-8 shadow-card">
            <div className="absolute -top-4 right-8 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
              <Quote className="h-4 w-4" />
            </div>

            <div className="flex gap-1 mb-6">
              {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" />
              ))}
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              "{testimonials[activeIndex].content}"
            </p>

            <div className="flex items-center gap-4 pt-6 border-t border-border">
              <img
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].name}
                className="h-14 w-14 rounded-full object-cover ring-2 ring-primary/20 ring-offset-2 ring-offset-background"
              />
              <div>
                <p className="font-semibold text-foreground">{testimonials[activeIndex].name}</p>
                <p className="text-sm text-muted-foreground">{testimonials[activeIndex].role}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'w-8 bg-primary' : 'w-2 bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
            <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {[
            { value: '10K+', label: 'Happy Customers' },
            { value: '500+', label: 'Plant Species' },
            { value: '4.9', label: 'Average Rating' },
            { value: '98%', label: 'Satisfaction Rate' },
          ].map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="font-display text-4xl font-bold text-primary lg:text-5xl">{stat.value}</p>
              <p className="mt-2 text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
