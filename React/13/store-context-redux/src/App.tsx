import React from 'react';
import './App.css';
import ProductCatalog from './Components/ProductCatalog/ProductCatalog';
import ShoppingCart from './Components/ShoppingCart/ShoppingCart';
import ThemeToggle from './Components/ThemeToggle';
import { ThemeProvider, useTheme } from './ThemeContext';

const App: React.FC = () => {
  const { isDarkTheme } = useTheme();

  return (
    <div className={`App ${isDarkTheme ? 'dark' : 'light'}`}>
      <ThemeToggle />
      <ShoppingCart />
      <ProductCatalog />
    </div>
  );
}

const AppWrapper: React.FC = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default AppWrapper;
