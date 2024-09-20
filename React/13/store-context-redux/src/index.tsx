import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import cartReducer from './Reducers/cartReducer';
import rootReducer from './Reducers/rootReducer';

const store = createStore(rootReducer)


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

