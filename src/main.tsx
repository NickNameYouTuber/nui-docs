import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@nicorp/nui';
import '@nicorp/nui/dist/style.css';
import App from './App';
import './index.css';
import faviconSmall from '../nui-logo-small.png';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" attribute="class" enableSystem>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// Set favicon at runtime using imported asset so bundler serves it correctly
const link = document.querySelector('link[rel="icon"]') as HTMLLinkElement | null;
if (link) {
  link.href = faviconSmall;
} else {
  const l = document.createElement('link');
  l.rel = 'icon';
  l.href = faviconSmall;
  document.head.appendChild(l);
}
