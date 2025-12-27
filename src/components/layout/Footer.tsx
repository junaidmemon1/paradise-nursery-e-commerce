import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container-main py-12 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <Leaf className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-semibold leading-tight text-foreground">
                  Paradise
                </span>
                <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                  Nursery
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Bringing nature into your home since 2020. We're passionate about helping you create your own green paradise.
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display text-base font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {['Shop All', 'Indoor Plants', 'Outdoor Plants', 'Pots & Planters', 'Accessories'].map((item) => (
                <li key={item}>
                  <Link 
                    to="/products" 
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div className="space-y-4">
            <h3 className="font-display text-base font-semibold text-foreground">Help</h3>
            <ul className="space-y-2">
              {['Plant Care Guide', 'Shipping Info', 'Returns', 'FAQs', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link 
                    to="/" 
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-display text-base font-semibold text-foreground">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span className="text-sm text-muted-foreground">
                  123 Green Street<br />
                  Garden City, GC 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                <span className="text-sm text-muted-foreground">(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
                <span className="text-sm text-muted-foreground">hello@paradisenursery.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © 2024 Paradise Nursery. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                Privacy Policy
              </Link>
              <Link to="/" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
