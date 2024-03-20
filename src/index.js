import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from "../src/Components/Header/index.jsx";
import Footer from "../src/Components/Footer/index.jsx";
import Router from "./Router.jsx";
import { HashRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import {store, persistor } from '../src/Redux/Store.js';
import {PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HashRouter>
          <Header />
          <Router />
          <Footer />
        </HashRouter>
        </PersistGate>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
