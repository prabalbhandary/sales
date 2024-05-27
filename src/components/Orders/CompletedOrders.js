import React from 'react';
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton
} from '@chakra-ui/react';
import { ViewIcon, DeleteIcon } from '@chakra-ui/icons';

const CompletedOrders = () => {
  const completedOrders = [
    { id: 1, customer_id: 'C001', sku_id: 'SKU001', quantity: 10 },
    { id: 2, customer_id: 'C002', sku_id: 'SKU002', quantity: 15 },
    { id: 3, customer_id: 'C003', sku_id: 'SKU003', quantity: 20 },
  ];

  return (
    <Box>
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
          {completedOrders.map((order) => (
            <Tr key={order.id}>
              <Td>{order.customer_id}</Td>
              <Td>{order.sku_id}</Td>
              <Td>{order.quantity}</Td>
              <Td>
                <IconButton
                  icon={<ViewIcon />}
                  colorScheme="teal"
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
    </Box>
  );
};

export default CompletedOrders;
