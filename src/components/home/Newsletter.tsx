import { useState } from 'react';
import { Send, Leaf, CheckCircle, Mail, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      toast({
        title: "Welcome to Paradise! 🌿",
        description: "You've successfully subscribed to our newsletter.",
      });
      setTimeout(() => {
        setEmail('');
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute top-0 left-0 h-64 w-64 rounded-full bg-sage/20 blur-3xl animate-float" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-accent/10 blur-3xl animate-float-delayed" />
      
      <div className="container-main relative py-20 lg:py-32">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl glass p-8 lg:p-12 shadow-3d">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              {/* Content */}
              <div className="text-center lg:text-left">
                <div className="mb-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 animate-fade-down">
                  <Gift className="h-4 w-4 text-accent" />
                  <span className="text-sm font-medium text-primary-foreground/90">
                    Exclusive Offer
                  </span>
                </div>

                <h2 className="font-display text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl animate-fade-up">
                  Get <span className="text-sage-light">10% Off</span>
                  <br />Your First Order
                </h2>
                
                <p className="mt-6 text-primary-foreground/80 lg:text-lg animate-fade-up" style={{ animationDelay: '0.1s' }}>
                  Subscribe to our newsletter for exclusive deals, plant care tips, and new arrival alerts.
                </p>

                {/* Benefits */}
                <div className="mt-8 space-y-3 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                  {[
                    'Weekly plant care tips',
                    'Early access to new arrivals',
                    'Exclusive subscriber discounts',
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3 justify-center lg:justify-start">
                      <CheckCircle className="h-5 w-5 text-sage-light flex-shrink-0" />
                      <span className="text-sm text-primary-foreground/80">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form */}
              <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
                <div className="rounded-2xl bg-primary-foreground/10 p-6 lg:p-8 backdrop-blur-sm">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-foreground/20 mx-auto lg:mx-0">
                    <Mail className="h-8 w-8 text-primary-foreground" />
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-14 rounded-xl border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground/40 pr-12"
                        required
                        disabled={isSubmitted}
                      />
                      <Leaf className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-primary-foreground/40" />
                    </div>
                    
                    <Button
                      type="submit"
                      disabled={isSubmitted}
                      className={`w-full h-14 gap-3 rounded-xl text-base font-semibold transition-all duration-300 ${
                        isSubmitted 
                          ? 'bg-sage text-primary' 
                          : 'bg-primary-foreground text-primary hover:bg-primary-foreground/90'
                      }`}
                    >
                      {isSubmitted ? (
                        <>
                          <CheckCircle className="h-5 w-5" />
                          Subscribed!
                        </>
                      ) : (
                        <>
                          Subscribe Now
                          <Send className="h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>

                  <p className="mt-4 text-center text-xs text-primary-foreground/50">
                    No spam, unsubscribe anytime. We respect your privacy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
