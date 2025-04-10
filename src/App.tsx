// src/App.tsx
import React from 'react';
import { Container } from '@mui/material';
import { JSX } from 'react/jsx-runtime';
import QuiltedImageList from './Images/Images';

const App: React.FunctionComponent = (): JSX.Element => {
  return (
    <>
      <Container maxWidth='lg'>
        <QuiltedImageList />
      </Container>
    </>
  );
};

export default App;
