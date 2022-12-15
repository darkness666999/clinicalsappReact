import React from 'react';
import { createRoot } from 'react-dom/client';
import { AppProvider } from './context';
import App from './components/App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
