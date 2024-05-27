import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input
} from '@chakra-ui/react';

const OrderFormModal = ({ isOpen, onClose, initialData, onSubmit }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: initialData,
  });

  const handleClose = () => {
    reset();
    onClose();
  };

  const submitForm = (data) => {
    onSubmit(data);
    handleClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{initialData ? 'Edit Order' : 'Add Order'}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Customer ID</FormLabel>
            <Input {...register('customer_id')} />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>SKU ID</FormLabel>
            <Input {...register('sku_id')} />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Quantity</FormLabel>
            <Input {...register('quantity')} />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSubmit(submitForm)}>
            Save
          </Button>
          <Button variant="ghost" onClick={handleClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default OrderFormModal;
