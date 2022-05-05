import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import './index.css';
import App from './App';
import ItemProvider from './Providers/item/items.providers';
import ModalProvider from './Providers/modal/modal.providers';
import GridProvider from './Providers/grid/grids.providers';
import DropProvider from './Providers/drop/drop.providers';
import CartProvider from './Providers/cart/cart.provider';


ReactDOM.render(
  <ItemProvider>
    <CartProvider>
      <GridProvider>
        <ModalProvider>
          <DropProvider>
            <Provider store={store}>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </Provider>
          </DropProvider>
        </ModalProvider>
      </GridProvider>
    </CartProvider>
  </ItemProvider>,

  document.getElementById('root')
);
