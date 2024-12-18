// @flow
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalContextProvider } from './context/GlobalState';

// Ensure Flow recognizes the element ID as a valid non-null DOM element
const rootElement = document.getElementById('root');
if (rootElement == null) {
  throw new Error('Root element not found');
}

const root = ReactDOM.createRoot((rootElement: HTMLElement));

root.render(
  <GlobalContextProvider>
    <App />
  </GlobalContextProvider>
);
