import React from 'react';
import { useTheme } from '../ThemeContext';

const ThemeToggle: React.FC = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Переключить на {isDarkTheme ? 'светлую' : 'темную'} тему
    </button>
  );
};

export default ThemeToggle;
