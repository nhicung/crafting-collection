import React from 'react';
import { Modal, Box } from '@mui/material';
import Carousel from './Carousel/Carousel';
import type { Image } from './Images/Images';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  imageUrl: Image[];
  title: string;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  maxWidth: '90vw',
  maxHeight: '90vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  outline: 'none',
};

export default function PopupModal({ open, onClose, imageUrl }: ModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <Carousel images={imageUrl} />
      </Box>
    </Modal>
  );
}
