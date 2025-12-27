import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';

const Cart = () => {
  const { state, removeItem, updateQuantity, totalPrice } = useCart();

  return (
    <>
      <Helmet>
        <title>Shopping Cart | Paradise Nursery</title>
        <meta name="description" content="Review your shopping cart and proceed to checkout." />
      </Helmet>
      <Layout>
        <div className="py-8 lg:py-12">
          <div className="container-main">
            <Link
              to="/products"
              className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Continue Shopping
            </Link>

            <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Shopping Cart
            </h1>

            {state.items.length === 0 ? (
              <div className="mt-12 flex flex-col items-center justify-center py-16 text-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-secondary">
                  <ShoppingBag className="h-10 w-10 text-muted-foreground" />
                </div>
                <h2 className="mt-6 font-display text-xl font-semibold text-foreground">
                  Your cart is empty
                </h2>
                <p className="mt-2 max-w-sm text-muted-foreground">
                  Looks like you haven't added any plants yet. Start exploring our collection!
                </p>
                <Button asChild className="mt-6">
                  <Link to="/products">Browse Plants</Link>
                </Button>
              </div>
            ) : (
              <div className="mt-8 grid gap-8 lg:grid-cols-3">
                {/* Cart Items */}
                <div className="lg:col-span-2">
                  <div className="space-y-4">
                    {state.items.map((item) => (
                      <div
                        key={item.product.id}
                        className="flex gap-4 rounded-2xl bg-card p-4 shadow-soft sm:gap-6 sm:p-6"
                      >
                        <Link
                          to={`/products/${item.product.id}`}
                          className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl sm:h-32 sm:w-32"
                        >
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="h-full w-full object-cover transition-transform hover:scale-110"
                          />
                        </Link>
                        <div className="flex flex-1 flex-col">
                          <div className="flex items-start justify-between">
                            <div>
                              <Link
                                to={`/products/${item.product.id}`}
                                className="font-display text-lg font-semibold text-foreground hover:text-primary"
                              >
                                {item.product.name}
                              </Link>
                              <p className="mt-1 text-sm capitalize text-muted-foreground">
                                {item.product.category}
                              </p>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-muted-foreground hover:text-destructive"
                              onClick={() => removeItem(item.product.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="mt-auto flex items-center justify-between pt-4">
                            <div className="flex items-center gap-2">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() =>
                                  updateQuantity(item.product.id, item.quantity - 1)
                                }
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="w-8 text-center font-medium">
                                {item.quantity}
                              </span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() =>
                                  updateQuantity(item.product.id, item.quantity + 1)
                                }
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                            <span className="text-lg font-bold text-foreground">
                              ${(item.product.price * item.quantity).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                  <div className="sticky top-24 rounded-2xl bg-card p-6 shadow-soft">
                    <h2 className="font-display text-xl font-semibold text-foreground">
                      Order Summary
                    </h2>

                    <div className="mt-6 space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span className="font-medium text-foreground">
                          ${totalPrice.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Shipping</span>
                        <span className="font-medium text-foreground">
                          {totalPrice >= 50 ? 'Free' : '$5.99'}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Tax</span>
                        <span className="font-medium text-foreground">
                          ${(totalPrice * 0.08).toFixed(2)}
                        </span>
                      </div>
                    </div>

                    <div className="my-6 h-px bg-border" />

                    <div className="flex justify-between">
                      <span className="text-lg font-semibold text-foreground">Total</span>
                      <span className="text-lg font-bold text-foreground">
                        $
                        {(
                          totalPrice +
                          (totalPrice >= 50 ? 0 : 5.99) +
                          totalPrice * 0.08
                        ).toFixed(2)}
                      </span>
                    </div>

                    <Button size="lg" className="mt-6 w-full" asChild>
                      <Link to="/checkout">Proceed to Checkout</Link>
                    </Button>

                    <p className="mt-4 text-center text-xs text-muted-foreground">
                      Free shipping on orders over $50
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Cart;
