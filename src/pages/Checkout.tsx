import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Check, CreditCard, Truck } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { useCreateOrder } from '@/hooks/useOrders';
import { useToast } from '@/hooks/use-toast';

const Checkout = () => {
  const { state, totalPrice, clearCart } = useCart();
  const { user } = useAuth();
  const createOrder = useCreateOrder();
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: user?.email || '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      const shippingCost = totalPrice >= 50 ? 0 : 5.99;
      const tax = totalPrice * 0.08;
      const total = totalPrice + shippingCost + tax;

      await createOrder.mutateAsync({
        total,
        shippingName: `${formData.firstName} ${formData.lastName}`,
        shippingEmail: formData.email,
        shippingPhone: formData.phone || null,
        shippingAddress: formData.address,
        shippingCity: formData.city,
        shippingPostalCode: formData.zip,
        shippingCountry: 'United States',
        items: state.items.map((item) => ({
          product_id: item.product.id,
          product_name: item.product.name,
          product_image: item.product.image,
          quantity: item.quantity,
          price: item.product.price,
        })),
      });

      setOrderComplete(true);
      clearCart();
      toast({
        title: "Order placed successfully! 🌿",
        description: "Thank you for your purchase. You'll receive a confirmation email shortly.",
      });
    } catch (error) {
      toast({
        title: "Error placing order",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  if (orderComplete) {
    return (
      <Layout>
        <Helmet>
          <title>Order Confirmed | Paradise Nursery</title>
        </Helmet>
        <div className="py-16 lg:py-24">
          <div className="container-main text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary animate-scale-in">
              <Check className="h-10 w-10 text-primary-foreground" />
            </div>
            <h1 className="mt-6 font-display text-3xl font-bold text-foreground sm:text-4xl">
              Thank You for Your Order!
            </h1>
            <p className="mx-auto mt-4 max-w-md text-muted-foreground">
              Your order has been confirmed and will be shipped soon. We've sent a confirmation email with your order details.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild>
                <Link to="/products">Continue Shopping</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/profile">View Orders</Link>
              </Button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (state.items.length === 0) {
    return (
      <Layout>
        <div className="container-main py-16 text-center">
          <h1 className="font-display text-2xl font-bold">Your cart is empty</h1>
          <Button asChild className="mt-4">
            <Link to="/products">Browse Products</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const shippingCost = totalPrice >= 50 ? 0 : 5.99;
  const tax = totalPrice * 0.08;
  const total = totalPrice + shippingCost + tax;

  return (
    <>
      <Helmet>
        <title>Checkout | Paradise Nursery</title>
        <meta name="description" content="Complete your purchase and get your plants delivered to your door." />
      </Helmet>
      <Layout>
        <div className="py-8 lg:py-12">
          <div className="container-main">
            <Link
              to="/cart"
              className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Cart
            </Link>

            <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Checkout
            </h1>

            <form onSubmit={handleSubmit} className="mt-8 grid gap-8 lg:grid-cols-3">
              <div className="space-y-8 lg:col-span-2">
                <div className="rounded-2xl bg-card p-6 shadow-soft">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Truck className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="font-display text-xl font-semibold text-foreground">
                      Shipping Information
                    </h2>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" value={formData.firstName} onChange={handleInputChange} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" value={formData.lastName} onChange={handleInputChange} required />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" value={formData.email} onChange={handleInputChange} required />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="address">Street Address</Label>
                      <Input id="address" placeholder="123 Plant Street" value={formData.address} onChange={handleInputChange} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="Garden City" value={formData.city} onChange={handleInputChange} required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="state">State</Label>
                        <Input id="state" placeholder="CA" value={formData.state} onChange={handleInputChange} required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zip">ZIP Code</Label>
                        <Input id="zip" placeholder="12345" value={formData.zip} onChange={handleInputChange} required />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-card p-6 shadow-soft">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <CreditCard className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="font-display text-xl font-semibold text-foreground">Payment</h2>
                  </div>
                  <div className="rounded-lg bg-secondary/50 p-4 text-center">
                    <p className="text-sm text-muted-foreground">Demo checkout - no real payment processed</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-24 rounded-2xl bg-card p-6 shadow-soft">
                  <h2 className="font-display text-xl font-semibold text-foreground">Order Summary</h2>
                  <div className="mt-6 max-h-60 space-y-4 overflow-y-auto">
                    {state.items.map((item) => (
                      <div key={item.product.id} className="flex gap-3">
                        <img src={item.product.image} alt={item.product.name} className="h-16 w-16 rounded-lg object-cover" />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground">{item.product.name}</p>
                          <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                        </div>
                        <span className="text-sm font-medium">${(item.product.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                  <div className="my-6 h-px bg-border" />
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>${totalPrice.toFixed(2)}</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Shipping</span><span>{shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Tax</span><span>${tax.toFixed(2)}</span></div>
                  </div>
                  <div className="my-6 h-px bg-border" />
                  <div className="flex justify-between text-lg font-bold"><span>Total</span><span>${total.toFixed(2)}</span></div>
                  <Button type="submit" size="lg" className="mt-6 w-full" disabled={isProcessing}>
                    {isProcessing ? 'Processing...' : `Place Order`}
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Checkout;
          productId: item.product.id,
          productName: item.product.name,
          productImage: item.product.image,
          quantity: item.quantity,
          price: item.product.price,
        })),
      });

      setOrderComplete(true);
      clearCart();
      toast({
        title: "Order placed successfully! 🌿",
        description: "Thank you for your purchase. You'll receive a confirmation email shortly.",
      });
    } catch (error) {
      toast({
        title: "Error placing order",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  if (orderComplete) {
    return (
      <Layout>
        <Helmet>
          <title>Order Confirmed | Paradise Nursery</title>
        </Helmet>
        <div className="py-16 lg:py-24">
          <div className="container-main text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary animate-scale-in">
              <Check className="h-10 w-10 text-primary-foreground" />
            </div>
            <h1 className="mt-6 font-display text-3xl font-bold text-foreground sm:text-4xl">
              Thank You for Your Order!
            </h1>
            <p className="mx-auto mt-4 max-w-md text-muted-foreground">
              Your order has been confirmed and will be shipped soon. We've sent a confirmation email with your order details.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild>
                <Link to="/products">Continue Shopping</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/profile">View Orders</Link>
              </Button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (state.items.length === 0) {
    return (
      <Layout>
        <div className="container-main py-16 text-center">
          <h1 className="font-display text-2xl font-bold">Your cart is empty</h1>
          <Button asChild className="mt-4">
            <Link to="/products">Browse Products</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const shippingCost = totalPrice >= 50 ? 0 : 5.99;
  const tax = totalPrice * 0.08;
  const total = totalPrice + shippingCost + tax;

  return (
    <>
      <Helmet>
        <title>Checkout | Paradise Nursery</title>
        <meta name="description" content="Complete your purchase and get your plants delivered to your door." />
      </Helmet>
      <Layout>
        <div className="py-8 lg:py-12">
          <div className="container-main">
            <Link
              to="/cart"
              className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Cart
            </Link>

            <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Checkout
            </h1>

            <form onSubmit={handleSubmit} className="mt-8 grid gap-8 lg:grid-cols-3">
              {/* Form Section */}
              <div className="space-y-8 lg:col-span-2">
                {/* Shipping Information */}
                <div className="rounded-2xl bg-card p-6 shadow-soft">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Truck className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="font-display text-xl font-semibold text-foreground">
                      Shipping Information
                    </h2>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="phone">Phone (optional)</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="address">Street Address</Label>
                      <Input
                        id="address"
                        placeholder="123 Plant Street"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        placeholder="Garden City"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="state">State</Label>
                        <Input
                          id="state"
                          placeholder="CA"
                          value={formData.state}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zip">ZIP Code</Label>
                        <Input
                          id="zip"
                          placeholder="12345"
                          value={formData.zip}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Information - Simulated */}
                <div className="rounded-2xl bg-card p-6 shadow-soft">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <CreditCard className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="font-display text-xl font-semibold text-foreground">
                      Payment Information
                    </h2>
                  </div>

                  <div className="rounded-lg bg-secondary/50 p-4 text-center">
                    <p className="text-sm text-muted-foreground">
                      This is a demo checkout. No real payment will be processed.
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground">
                      Click "Place Order" to simulate a successful order.
                    </p>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 rounded-2xl bg-card p-6 shadow-soft">
                  <h2 className="font-display text-xl font-semibold text-foreground">
                    Order Summary
                  </h2>

                  <div className="mt-6 max-h-60 space-y-4 overflow-y-auto">
                    {state.items.map((item) => (
                      <div key={item.product.id} className="flex gap-3">
                        <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground">
                            {item.product.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Qty: {item.quantity}
                          </p>
                        </div>
                        <span className="text-sm font-medium text-foreground">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="my-6 h-px bg-border" />

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-medium text-foreground">
                        ${totalPrice.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="font-medium text-foreground">
                        {shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Tax</span>
                      <span className="font-medium text-foreground">
                        ${tax.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <div className="my-6 h-px bg-border" />

                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-foreground">Total</span>
                    <span className="text-lg font-bold text-foreground">
                      ${total.toFixed(2)}
                    </span>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="mt-6 w-full"
                    disabled={isProcessing}
                  >
                    {isProcessing ? 'Processing...' : `Place Order - $${total.toFixed(2)}`}
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Checkout;
