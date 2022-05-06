import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import ItemProvider from './Providers/item/items.providers';
import ModalProvider from './Providers/modal/modal.providers';
import GridProvider from './Providers/grid/grids.providers';
import DropProvider from './Providers/drop/drop.providers';
import CartProvider from './Providers/cart/cart.provider';
import UserProvider from './Providers/user/user.providers';


ReactDOM.render(
  <ItemProvider>
  <UserProvider>
    <CartProvider>
      <GridProvider>
        <ModalProvider>
          <DropProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
          </DropProvider>
        </ModalProvider>
      </GridProvider>
    </CartProvider>
    </UserProvider>
  </ItemProvider>,

  document.getElementById('root')
);
