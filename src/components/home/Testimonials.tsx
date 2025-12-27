import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Plant Parent',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
    content: 'Paradise Nursery has completely transformed my apartment. The plants arrive healthy and the care guides are so helpful!',
    rating: 5,
  },
  {
    id: 2,
    name: 'James Chen',
    role: 'Interior Designer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
    content: 'I recommend Paradise Nursery to all my clients. Their selection is incredible and the quality is consistently excellent.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Home Gardener',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80',
    content: 'Best online plant shop I\'ve found! Fast shipping, beautiful packaging, and the plants are always in perfect condition.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-main">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Join thousands of happy plant parents who have transformed their spaces
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="rounded-2xl bg-card p-6 shadow-card animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="mt-4 text-muted-foreground leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
