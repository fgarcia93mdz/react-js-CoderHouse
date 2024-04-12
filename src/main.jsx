import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom'
// , Link, Switch, Route

// redux toolkit imports
import { store } from './app/store'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material';
import theme from './styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={ store }>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>

  </Provider>
);


reportWebVitals();
 