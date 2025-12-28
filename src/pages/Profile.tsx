import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { User, Package, MapPin, Mail, Phone, LogOut, Calendar } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/context/AuthContext';
import { useOrders } from '@/hooks/useOrders';
import { format } from 'date-fns';

const Profile = () => {
  const { user, profile, signOut } = useAuth();
  const { data: orders, isLoading: ordersLoading } = useOrders();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'bg-primary/10 text-primary';
      case 'shipped':
        return 'bg-blue-100 text-blue-700';
      case 'processing':
        return 'bg-yellow-100 text-yellow-700';
      case 'pending':
      default:
        return 'bg-accent/10 text-accent';
    }
  };

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
                    <CardTitle className="mt-4 font-display">
                      {profile?.full_name || 'Welcome!'}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Member since {profile?.created_at ? format(new Date(profile.created_at), 'MMMM yyyy') : 'Recently'}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{user?.email}</span>
                    </div>
                    {profile?.phone && (
                      <div className="flex items-center gap-3">
                        <Phone className="h-4 w-4 text-primary" />
                        <span className="text-sm text-muted-foreground">{profile.phone}</span>
                      </div>
                    )}
                    {profile?.address && (
                      <div className="flex items-start gap-3">
                        <MapPin className="h-4 w-4 text-primary mt-0.5" />
                        <span className="text-sm text-muted-foreground">{profile.address}</span>
                      </div>
                    )}
                    <div className="pt-4 border-t border-border">
                      <Button variant="outline" className="w-full gap-2" onClick={handleSignOut}>
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
                    {ordersLoading ? (
                      <div className="py-8 text-center text-muted-foreground">Loading orders...</div>
                    ) : orders && orders.length > 0 ? (
                      <div className="space-y-4">
                        {orders.map((order) => (
                          <div
                            key={order.id}
                            className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-lg border border-border p-4"
                          >
                            <div>
                              <p className="font-semibold text-foreground">
                                Order #{order.id.slice(0, 8).toUpperCase()}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {format(new Date(order.created_at), 'MMM d, yyyy')} • {order.order_items?.length || 0} items
                              </p>
                            </div>
                            <div className="flex items-center gap-4">
                              <span className={`rounded-full px-3 py-1 text-xs font-medium capitalize ${getStatusColor(order.status)}`}>
                                {order.status}
                              </span>
                              <span className="font-semibold text-foreground">
                                ${Number(order.total).toFixed(2)}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground">No orders yet</p>
                        <Button className="mt-4" onClick={() => navigate('/products')}>
                          Start Shopping
                        </Button>
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
