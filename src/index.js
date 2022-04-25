import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import './index.css';
import App from './App';
import ItemProvider from './Providers/item/item.component';


ReactDOM.render(

    <Provider store={store}>
    <ItemProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </ItemProvider>
    </Provider>,
 
  document.getElementById('root')
);
