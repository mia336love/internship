import './App.css';
import { useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationMenu from './Components/NavigationMenu/NavigationMenu';

import ScrollPosition from './Components/ScrollPosition/ScrollPosition';
import SearchReposMain from './Components/SearchRepos/SearchReposMain';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';
import { createContext } from 'react';


type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme;
  setTheme: (value: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)


const App = () => {

  const [theme, setTheme] = useState<Theme>('light')
  return (
    <div className={`App ${theme}`}>
      <Router>
        <ThemeContext.Provider value={{ theme, setTheme }} >
          <NavigationMenu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scroll" element={<ScrollPosition />} />
            <Route path="/search-repos" element={<SearchReposMain />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </ThemeContext.Provider>

      </Router>
    </div>

  );
};

export default App;
