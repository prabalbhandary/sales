import React, { useState } from 'react';
import {
  Box,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
  Spinner
} from '@chakra-ui/react';
import { AddIcon, EditIcon, DeleteIcon } from '@chakra-ui/icons';
import OrderFormModal from './OrderFormModal';
import useOrders from '../../hooks/useOrders';

const ActiveOrders = () => {
  const { orders, status, addOrder, updateOrder } = useOrders();
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(null);

  const openModal = (order) => {
    setCurrentOrder(order);
    setModalOpen(true);
  };

  const closeModal = () => {
    setCurrentOrder(null);
    setModalOpen(false);
  };

  const handleOrderSubmit = (order) => {
    if (currentOrder) {
      updateOrder(order);
    } else {
      addOrder(order);
    }
    closeModal();
  };

  return (
    <Box>
      <Button 
        onClick={() => openModal(null)} 
        leftIcon={<AddIcon />} 
        mb={4} 
        colorScheme="blue"
      >
        Add Sale Order
      </Button>
      {status === 'loading' ? (
        <Spinner />
      ) : (
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Customer ID</Th>
              <Th>SKU ID</Th>
              <Th>Quantity</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {orders.map((order) => (
              <Tr key={order.id}>
                <Td>{order.customer_id}</Td>
                <Td>{order.sku_id}</Td>
                <Td>{order.quantity}</Td>
                <Td>
                  <IconButton
                    icon={<EditIcon />}
                    onClick={() => openModal(order)}
                    colorScheme="blue"
                  />
                  <Box as="span" mx={2} />
                  <IconButton
                    icon={<DeleteIcon />}
                    colorScheme="red"
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
      <OrderFormModal
        isOpen={isModalOpen}
        onClose={closeModal}
        initialData={currentOrder}
        onSubmit={handleOrderSubmit}
      />
    </Box>
  );
};

export default ActiveOrders;
