import './assets/scss/site.scss';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <div>Hell World</div>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
);
