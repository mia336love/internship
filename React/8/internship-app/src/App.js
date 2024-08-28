import { BrowserRouter as Router, Route, Link, Switch, Redirect, Routes } from 'react-router-dom';
import './App.css';

import SearchReposMain from './Components/SearchRepos/SearchReposMain/SearchReposMain';
import Home from './Components/Home/Home';
import CatsPics from './Components/CatsPics/CatsPics';
import NavigationMenu from './Components/NavigationMenu/NavigationMenu';

function App() {
  return (
    <div className="App">
      {/* <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search-repo">Search repos</Link>
            </li>
            <li>
              <Link to="/cats-pics">Cats</Link>
            </li>
          </ul>

        </nav>

        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/search-repo' element={<SearchReposMain />} />
          <Route path='/cats-pics' element={<CatsPics />} />
        </Routes>

      </Router> */}

      <NavigationMenu />
    </div>
  );
}

export default App;
