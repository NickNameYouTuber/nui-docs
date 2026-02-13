import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@nicorp/nui';
import '@nicorp/nui/dist/style.css';
import App from './App';
import './index.css';
import faviconSmall from '../nui-logo-small.png';

class ErrorBoundary extends React.Component<{children: React.ReactNode}, {error: Error | null}> {
  state = { error: null as Error | null };
  static getDerivedStateFromError(error: Error) { return { error }; }
  render() {
    if (this.state.error) {
      return (
        <div style={{padding: '2rem', fontFamily: 'monospace', color: 'red', whiteSpace: 'pre-wrap'}}>
          <h1>Runtime Error</h1>
          <p>{this.state.error.message}</p>
          <pre>{this.state.error.stack}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <ThemeProvider defaultTheme="dark" attribute="class" enableSystem>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </ErrorBoundary>
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
