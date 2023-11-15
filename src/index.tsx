import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './common.css';
import { BrowserRouter } from 'react-router-dom';
import { TodoStoreProvider } from './components';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  /* <React.StrictMode> */
  <BrowserRouter>
    <TodoStoreProvider>
      <App />
    </TodoStoreProvider>
  </BrowserRouter>,
  /*  </React.StrictMode> */
);
