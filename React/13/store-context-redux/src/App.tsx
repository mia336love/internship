import React from 'react';
import './App.css';
import ProductCatalog from './Components/ProductCatalog/ProductCatalog';
import ShoppingCart from './Components/ShoppingCart/ShoppingCart';

function App() {
  return (
    <div className="App">
      <ShoppingCart />
      <ProductCatalog />
    </div>
  );
}

export default App;
