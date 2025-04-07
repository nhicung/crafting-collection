// src/App.tsx
import React from 'react';
import { Button, Container } from '@mui/material';
import { JSX } from 'react/jsx-runtime';
import QuiltedImageList from './Images/Images';
import Carousel from './Carousel/Carousel';

const App: React.FunctionComponent = (): JSX.Element => {
  return (
    <>
      <Container maxWidth='lg'>
        <h1>Welcome to my Material UI app!</h1>
        <Button variant='contained' color='primary'>
          Click Me
        </Button>
        <QuiltedImageList />
        <Carousel />
      </Container>
    </>
  );
};

export default App;
