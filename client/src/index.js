import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import './index.css';

import { createTheme, ThemeProvider } from '@material-ui/core';
import { orange } from '@material-ui/core/colors';
import App from './App';
import reducers from './reducers';
// import reportWebVitals from './reportWebVitals';
const store = createStore(reducers, compose(applyMiddleware(thunk)));
const theme = createTheme({
  status: {
    danger: orange[500],
  },
});
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider >,
  document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
