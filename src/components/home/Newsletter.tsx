import { useState } from 'react';
import { Send, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Welcome to Paradise! 🌿",
        description: "You've successfully subscribed to our newsletter.",
      });
      setEmail('');
    }
  };

  return (
    <section className="gradient-hero py-16 lg:py-24">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2">
            <Leaf className="h-4 w-4 text-sage-light" />
            <span className="text-sm font-medium text-primary-foreground/90">
              Join Our Community
            </span>
          </div>

          <h2 className="font-display text-3xl font-bold text-primary-foreground sm:text-4xl">
            Get 10% Off Your First Order
          </h2>
          <p className="mt-4 text-primary-foreground/80">
            Subscribe to our newsletter for exclusive deals, plant care tips, and new arrival alerts.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 flex-1 rounded-xl border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground/40"
              required
            />
            <Button
              type="submit"
              className="h-12 gap-2 rounded-xl bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Subscribe
              <Send className="h-4 w-4" />
            </Button>
          </form>

          <p className="mt-4 text-sm text-primary-foreground/60">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
