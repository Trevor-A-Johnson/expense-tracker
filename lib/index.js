import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalContextProvider } from './context/GlobalState';
const rootElement = document.getElementById('root');
if (rootElement == null) {
  throw new Error('Root element not found');
}
const root = ReactDOM.createRoot(rootElement);
root.render(<GlobalContextProvider>
    <App />
  </GlobalContextProvider>);