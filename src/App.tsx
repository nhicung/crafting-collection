// src/App.tsx
import React from 'react';
import { Container } from '@mui/material';
import { JSX } from 'react/jsx-runtime';
import Images from './components/Images/Images';
import Hero from './components/Hero/Hero';

const App: React.FunctionComponent = (): JSX.Element => {
  return (
    <>
      <Hero />
      <Container maxWidth='xl'>
        <Images />
      </Container>
    </>
  );
};

export default App;
