import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';

import './styles/common.css';
import './styles/contents_main.css';
import './styles/contents_side.css';

import './styles/basic.css';
import './styles/responsive.css';
import './styles/home.css';
import './styles/service.css';

import App from './App';
import store from './store/store';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from 'react-error-boundary';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <HelmetProvider>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <App />
      </ErrorBoundary>
    </HelmetProvider>
  </Provider>
);
