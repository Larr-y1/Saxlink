import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'

const container = document.getElementById('root');

if (container) {
  if (!window.reactRoot) {
    window.reactRoot = createRoot(container);
  }
  window.reactRoot.render(
    <StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </StrictMode>
  );
} else {
  console.error('Failed to find the root element');
}
