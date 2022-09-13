import theme from "./theme"
import { ThemeProvider } from "@emotion/react";

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ElevationScroll from  "./Header"
import PersistentDrawerLeft from "./HeaderWithHunburger"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      < PersistentDrawerLeft />
    {/* <ElevationScroll /> */}
    </ThemeProvider>
  </React.StrictMode>
);
