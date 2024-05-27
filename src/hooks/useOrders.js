import { useQueryClient } from 'react-query';
import { useMutation, useQuery } from 'react-query';

const initialOrders = [
  { id: 1, customer_id: 11908, sku_id: 220, quantity: 12 },
  { id: 2, customer_id: 11909, sku_id: 221, quantity: 5 },
];

const fetchOrders = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(initialOrders);
    }, 500);
  });
};

const addOrder = async (newOrder) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ ...newOrder, id: Date.now() });
    }, 500);
  });
};

const updateOrder = async (updatedOrder) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(updatedOrder);
    }, 500);
  });
};

const useOrders = () => {
  const queryClient = useQueryClient();

  const { data: orders, status } = useQuery(['orders'], fetchOrders);

  const mutationAddOrder = useMutation(addOrder, {
    onSuccess: (newOrder) => {
      queryClient.setQueryData(['orders'], (oldOrders) => [...oldOrders, newOrder]);
    },
  });

  const mutationUpdateOrder = useMutation(updateOrder, {
    onSuccess: (updatedOrder) => {
      queryClient.setQueryData(['orders'], (oldOrders) =>
        oldOrders.map((order) => (order.id === updatedOrder.id ? updatedOrder : order))
      );
    },
  });

  return {
    orders,
    status,
    addOrder: mutationAddOrder.mutate,
    updateOrder: mutationUpdateOrder.mutate,
  };
};

export default useOrders;
