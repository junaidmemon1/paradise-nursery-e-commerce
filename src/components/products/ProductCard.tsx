import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/hooks/useWishlist';
import { Product } from '@/data/products';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
}

const PLACEHOLDER_IMAGE = 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=800&q=80';

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem, openCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const [imgSrc, setImgSrc] = useState(product.image);
  const [imgError, setImgError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const isWishlisted = isInWishlist(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    openCart();
  };

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  const handleImageError = () => {
    if (!imgError) {
      setImgError(true);
      setImgSrc(PLACEHOLDER_IMAGE);
    }
  };

  const discountPercent = product.originalPrice 
    ? Math.round((1 - product.price / product.originalPrice) * 100) 
    : 0;

  return (
    <Link
      to={`/products/${product.id}`}
      className="group relative block overflow-hidden rounded-3xl bg-card transition-all duration-500 hover:shadow-3d"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badges */}
      <div className="absolute left-4 top-4 z-10 flex flex-col gap-2">
        {product.bestseller && (
          <span className="rounded-full bg-primary px-3 py-1.5 text-xs font-bold text-primary-foreground shadow-lg animate-scale-in">
            Bestseller
          </span>
        )}
        {discountPercent > 0 && (
          <span className="rounded-full bg-accent px-3 py-1.5 text-xs font-bold text-accent-foreground shadow-lg animate-scale-in">
            -{discountPercent}%
          </span>
        )}
      </div>

      {/* Action Buttons */}
      <div className="absolute right-4 top-4 z-10 flex flex-col gap-2">
        <button
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full shadow-lg transition-all duration-300",
            isWishlisted
              ? "bg-accent text-accent-foreground scale-110"
              : "bg-background/90 text-muted-foreground hover:bg-accent hover:text-accent-foreground hover:scale-110"
          )}
          onClick={handleWishlistClick}
        >
          <Heart className={cn("h-4 w-4 transition-transform", isWishlisted && "fill-current scale-110")} />
        </button>
        <button
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full bg-background/90 text-muted-foreground shadow-lg transition-all duration-300 hover:bg-primary hover:text-primary-foreground",
            isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
          )}
        >
          <Eye className="h-4 w-4" />
        </button>
      </div>

      {/* Image */}
      <div className="aspect-square overflow-hidden bg-secondary">
        <img
          src={imgSrc}
          alt={product.name}
          className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
          onError={handleImageError}
          loading="lazy"
        />
        {/* Overlay gradient on hover */}
        <div className={cn(
          "absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-0"
        )} />
      </div>

      {/* Content */}
      <div className="p-5">
        <span className="inline-block rounded-full bg-secondary px-2.5 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {product.category}
        </span>
        <h3 className="mt-3 font-display text-lg font-semibold text-foreground transition-colors group-hover:text-primary line-clamp-1">
          {product.name}
        </h3>
        <div className="mt-3 flex items-center gap-3">
          <span className="text-xl font-bold text-foreground">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <Button
          onClick={handleAddToCart}
          className={cn(
            "mt-4 w-full gap-2 rounded-xl transition-all duration-300",
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          )}
          disabled={!product.inStock}
        >
          <ShoppingCart className="h-4 w-4" />
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </Button>
      </div>
    </Link>
  );
};

export default ProductCard;
