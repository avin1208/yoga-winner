import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import './index.css';
import App from './App';
import ItemProvider from './Providers/item/items.providers';
import CartProvider from './Providers/cart/cart.provider';


ReactDOM.render(
  <ItemProvider>
    <CartProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </CartProvider>
  </ItemProvider>,

  document.getElementById('root')
);
