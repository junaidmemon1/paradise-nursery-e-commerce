import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/context/AuthContext';

export interface OrderItem {
  id: string;
  order_id: string;
  product_id: string | null;
  product_name: string;
  product_image: string | null;
  quantity: number;
  price: number;
  created_at: string;
}

export interface Order {
  id: string;
  user_id: string;
  status: string;
  total: number;
  shipping_name: string;
  shipping_email: string;
  shipping_phone: string | null;
  shipping_address: string;
  shipping_city: string;
  shipping_postal_code: string;
  shipping_country: string;
  created_at: string;
  updated_at: string;
  order_items?: OrderItem[];
}

export interface CreateOrderData {
  shipping_name: string;
  shipping_email: string;
  shipping_phone?: string;
  shipping_address: string;
  shipping_city: string;
  shipping_postal_code: string;
  shipping_country: string;
  total: number;
  items: {
    product_id: string;
    product_name: string;
    product_image: string;
    quantity: number;
    price: number;
  }[];
}

export const useOrders = () => {
  const { user } = useAuth();

  return useQuery({
    queryKey: ['orders', user?.id],
    queryFn: async () => {
      if (!user) return [];

      const { data, error } = await supabase
        .from('orders')
        .select(`
          *,
          order_items (*)
        `)
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      return data as Order[];
    },
    enabled: !!user,
  });
};

export const useCreateOrder = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (orderData: CreateOrderData) => {
      if (!user) {
        throw new Error('Must be logged in to create an order');
      }

      // Create order
      const { data: order, error: orderError } = await supabase
        .from('orders')
        .insert({
          user_id: user.id,
          shipping_name: orderData.shipping_name,
          shipping_email: orderData.shipping_email,
          shipping_phone: orderData.shipping_phone,
          shipping_address: orderData.shipping_address,
          shipping_city: orderData.shipping_city,
          shipping_postal_code: orderData.shipping_postal_code,
          shipping_country: orderData.shipping_country,
          total: orderData.total,
          status: 'pending',
        })
        .select()
        .single();

      if (orderError) {
        throw orderError;
      }

      // Create order items
      const orderItems = orderData.items.map((item) => ({
        order_id: order.id,
        product_id: item.product_id,
        product_name: item.product_name,
        product_image: item.product_image,
        quantity: item.quantity,
        price: item.price,
      }));

      const { error: itemsError } = await supabase
        .from('order_items')
        .insert(orderItems);

      if (itemsError) {
        throw itemsError;
      }

      return order;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['orders'] });
    },
  });
};
