import React from 'react';
import { createRoot } from 'react-dom/client';
import './stylesheets/global.scss';
import App from './App';

// Simplified index createRoot
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);