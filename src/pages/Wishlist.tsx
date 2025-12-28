import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useWishlist } from '@/hooks/useWishlist';
import { useProducts } from '@/hooks/useProducts';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { Skeleton } from '@/components/ui/skeleton';

const PLACEHOLDER_IMAGE = 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=800&q=80';

const Wishlist = () => {
  const { user } = useAuth();
  const { wishlist, isLoading: wishlistLoading, removeFromWishlist } = useWishlist();
  const { data: products = [], isLoading: productsLoading } = useProducts();
  const { addItem, openCart } = useCart();

  const isLoading = wishlistLoading || productsLoading;

  const wishlistProducts = products.filter(product => 
    wishlist.some(item => item.product_id === product.id)
  );

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image_url,
      category: product.category,
      description: product.description || '',
      careInfo: {
        light: product.light || 'N/A',
        water: product.water || 'N/A',
        humidity: 'N/A',
        temperature: 'N/A',
      },
      inStock: product.stock > 0,
      featured: product.featured,
    });
    openCart();
  };

  if (!user) {
    return (
      <>
        <Helmet>
          <title>Wishlist | Paradise Nursery</title>
        </Helmet>
        <Layout>
          <div className="container-main py-16 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-secondary">
              <Heart className="h-10 w-10 text-muted-foreground" />
            </div>
            <h1 className="mt-6 font-display text-2xl font-bold text-foreground">
              Sign in to view your wishlist
            </h1>
            <p className="mt-2 text-muted-foreground">
              Save your favorite plants and come back to them anytime
            </p>
            <Button asChild className="mt-6">
              <Link to="/auth">Sign In</Link>
            </Button>
          </div>
        </Layout>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Wishlist | Paradise Nursery</title>
        <meta name="description" content="View and manage your saved plants and products." />
      </Helmet>
      <Layout>
        <div className="py-8 lg:py-12">
          <div className="container-main">
            <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              My Wishlist
            </h1>
            <p className="mt-2 text-muted-foreground">
              {wishlistProducts.length} {wishlistProducts.length === 1 ? 'item' : 'items'} saved
            </p>

            {isLoading ? (
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="rounded-2xl bg-card p-4">
                    <Skeleton className="aspect-square w-full rounded-xl" />
                    <Skeleton className="mt-4 h-4 w-3/4" />
                    <Skeleton className="mt-2 h-6 w-1/2" />
                  </div>
                ))}
              </div>
            ) : wishlistProducts.length === 0 ? (
              <div className="mt-16 flex flex-col items-center justify-center text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-secondary">
                  <Heart className="h-10 w-10 text-muted-foreground" />
                </div>
                <h2 className="mt-6 font-display text-xl font-semibold text-foreground">
                  Your wishlist is empty
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Start adding plants you love to your wishlist
                </p>
                <Button asChild className="mt-6">
                  <Link to="/products">Browse Plants</Link>
                </Button>
              </div>
            ) : (
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {wishlistProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group relative overflow-hidden rounded-2xl bg-card transition-all duration-300 hover:shadow-hover"
                  >
                    <Link to={`/products/${product.id}`}>
                      <div className="aspect-square overflow-hidden bg-secondary">
                        <img
                          src={product.image_url || PLACEHOLDER_IMAGE}
                          alt={product.name}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = PLACEHOLDER_IMAGE;
                          }}
                        />
                      </div>
                    </Link>
                    
                    <button
                      onClick={() => removeFromWishlist(product.id)}
                      className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-background/80 text-destructive backdrop-blur-sm transition-all hover:bg-background"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>

                    <div className="p-4">
                      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {product.category}
                      </span>
                      <h3 className="mt-1 font-display text-lg font-semibold text-foreground">
                        {product.name}
                      </h3>
                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-lg font-bold text-foreground">
                          ${product.price.toFixed(2)}
                        </span>
                        {product.original_price && (
                          <span className="text-sm text-muted-foreground line-through">
                            ${product.original_price.toFixed(2)}
                          </span>
                        )}
                      </div>
                      <Button
                        onClick={() => handleAddToCart(product)}
                        className="mt-3 w-full gap-2"
                        size="sm"
                        disabled={product.stock <= 0}
                      >
                        <ShoppingCart className="h-4 w-4" />
                        {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Wishlist;
