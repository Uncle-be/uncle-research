
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const mountNode = document.getElementById('root');

if (mountNode) {
  const root = ReactDOM.createRoot(mountNode);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  
  // Explicitly hide the loader once rendering starts
  const loader = document.getElementById('initial-loader');
  if (loader) {
    loader.style.display = 'none';
  }
}
