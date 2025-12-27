import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ShoppingCart, Heart, Sun, Droplets, Thermometer, Wind, Minus, Plus, Check } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/products/ProductCard';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { addItem, openCart } = useCart();
  const { toast } = useToast();

  const product = products.find((p) => p.id === id);
  const relatedProducts = products
    .filter((p) => p.category === product?.category && p.id !== id)
    .slice(0, 4);

  if (!product) {
    return (
      <Layout>
        <div className="container-main py-16 text-center">
          <h1 className="font-display text-2xl font-bold">Product not found</h1>
          <Button asChild className="mt-4">
            <Link to="/products">Back to Shop</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
    toast({
      title: "Added to cart!",
      description: `${quantity}x ${product.name} added to your cart.`,
    });
    openCart();
  };

  const careIcons = [
    { icon: Sun, label: 'Light', value: product.careInfo.light },
    { icon: Droplets, label: 'Water', value: product.careInfo.water },
    { icon: Wind, label: 'Humidity', value: product.careInfo.humidity },
    { icon: Thermometer, label: 'Temp', value: product.careInfo.temperature },
  ];

  return (
    <>
      <Helmet>
        <title>{product.name} | Paradise Nursery</title>
        <meta name="description" content={product.description} />
      </Helmet>
      <Layout>
        <div className="py-8 lg:py-12">
          <div className="container-main">
            {/* Breadcrumb */}
            <Link
              to="/products"
              className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Shop
            </Link>

            {/* Product Section */}
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl bg-secondary">
                <img
                  src={product.image}
                  alt={product.name}
                  className="aspect-square w-full object-cover"
                />
                {product.bestseller && (
                  <span className="absolute left-4 top-4 rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground">
                    Bestseller
                  </span>
                )}
              </div>

              {/* Details */}
              <div className="flex flex-col">
                <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  {product.category}
                </span>
                <h1 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
                  {product.name}
                </h1>

                {/* Price */}
                <div className="mt-4 flex items-center gap-3">
                  <span className="text-2xl font-bold text-foreground">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  {product.description}
                </p>

                {/* Care Info */}
                {product.category !== 'pots' && product.category !== 'accessories' && (
                  <div className="mt-8">
                    <h3 className="mb-4 font-semibold text-foreground">Plant Care</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {careIcons.map(({ icon: Icon, label, value }) => (
                        <div
                          key={label}
                          className="flex items-start gap-3 rounded-xl bg-secondary/50 p-4"
                        >
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-xs font-medium text-muted-foreground">
                              {label}
                            </p>
                            <p className="text-sm font-medium text-foreground">
                              {value}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quantity & Add to Cart */}
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <div className="flex items-center gap-3 rounded-xl border border-input p-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center font-medium">{quantity}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button
                    size="lg"
                    className="flex-1 gap-2"
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart className="h-5 w-5" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="lg" className="px-4">
                    <Heart className="h-5 w-5" />
                  </Button>
                </div>

                {/* Features */}
                <div className="mt-8 space-y-3">
                  {[
                    'Free shipping on orders over $50',
                    '30-day health guarantee',
                    'Expert plant care support',
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
              <div className="mt-16 lg:mt-24">
                <h2 className="mb-8 font-display text-2xl font-bold text-foreground">
                  You Might Also Like
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {relatedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProductDetail;
