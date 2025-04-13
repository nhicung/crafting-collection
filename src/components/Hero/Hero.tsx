import React from 'react';
import { useMediaQuery } from '@mui/material';
import desktopBackground from '../../assets/crafting-hero.png';
import mobileBackground from '../../assets/crafting-hero-mobile.png';
import './hero.css';
import { Container, Typography, Box } from '@mui/material';

export default function Hero() {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <>
      <div className='hero'>
        <img
          src={isMobile ? mobileBackground : desktopBackground}
          alt='hero-img'
        />
      </div>
      <Container maxWidth='lg'>
        <Box>
          <Typography
            variant='h2'
            sx={{
              color: 'white',
              fontSize: { xs: '1.5rem', sm: '3.5rem' },
            }}
          >
            Crafting Collection
          </Typography>
        </Box>
      </Container>
    </>
  );
}
