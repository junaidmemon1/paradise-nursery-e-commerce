import { Helmet } from 'react-helmet-async';
import { User, Package, MapPin, Mail, Phone, LogOut } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Profile = () => {
  // Mock user data - would come from auth context in real app
  const user = {
    name: 'Guest User',
    email: 'guest@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Green Street, Garden City, GC 12345',
    memberSince: 'December 2024',
  };

  // Mock order history
  const orders = [
    {
      id: 'ORD-001',
      date: 'Dec 20, 2024',
      status: 'Delivered',
      total: 127.00,
      items: 3,
    },
    {
      id: 'ORD-002',
      date: 'Dec 15, 2024',
      status: 'Processing',
      total: 85.00,
      items: 2,
    },
  ];

  return (
    <>
      <Helmet>
        <title>My Profile | Paradise Nursery</title>
        <meta
          name="description"
          content="View your profile, order history, and account settings at Paradise Nursery."
        />
      </Helmet>
      <Layout>
        <div className="py-8 lg:py-12">
          <div className="container-main">
            <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl mb-8">
              My Profile
            </h1>

            <div className="grid gap-8 lg:grid-cols-3">
              {/* User Info Card */}
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader className="text-center">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary">
                      <User className="h-10 w-10 text-primary-foreground" />
                    </div>
                    <CardTitle className="mt-4 font-display">{user.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Member since {user.memberSince}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{user.email}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{user.phone}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-4 w-4 text-primary mt-0.5" />
                      <span className="text-sm text-muted-foreground">{user.address}</span>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <Button variant="outline" className="w-full gap-2">
                        <LogOut className="h-4 w-4" />
                        Sign Out
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Order History */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-display">
                      <Package className="h-5 w-5 text-primary" />
                      Order History
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {orders.length > 0 ? (
                      <div className="space-y-4">
                        {orders.map((order) => (
                          <div
                            key={order.id}
                            className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-lg border border-border p-4"
                          >
                            <div>
                              <p className="font-semibold text-foreground">{order.id}</p>
                              <p className="text-sm text-muted-foreground">
                                {order.date} • {order.items} items
                              </p>
                            </div>
                            <div className="flex items-center gap-4">
                              <span
                                className={`rounded-full px-3 py-1 text-xs font-medium ${
                                  order.status === 'Delivered'
                                    ? 'bg-primary/10 text-primary'
                                    : 'bg-accent/10 text-accent'
                                }`}
                              >
                                {order.status}
                              </span>
                              <span className="font-semibold text-foreground">
                                ${order.total.toFixed(2)}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground">No orders yet</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Profile;
