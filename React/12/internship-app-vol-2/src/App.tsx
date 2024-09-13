import './App.css';
import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationMenu from './Components/NavigationMenu/NavigationMenu';

import ScrollPosition from './Components/ScrollPosition/ScrollPosition';
import SearchReposMain from './Components/SearchRepos/SearchReposMain';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <NavigationMenu />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scroll" element={<ScrollPosition />} />
            <Route path="/search-repos" element={<SearchReposMain />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
