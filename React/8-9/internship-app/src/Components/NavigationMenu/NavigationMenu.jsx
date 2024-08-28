import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import SearchReposMain from "../SearchRepos/SearchReposMain/SearchReposMain";
import Home from "../Home/Home";
import CatsPics from "../CatsPics/CatsPics";

import styles from "./NavigationMenu.module.css";

function NavigationMenu() {
  return (
    <div className={styles.navigationMenuMain}>
      <Router>
        <nav className={styles.navMenu}>
          <Link className={styles.link} to="/">
            Home
          </Link>
          <Link className={styles.link} to="/search-repo">
            Search repos
          </Link>
          <Link className={styles.link} to="/cats-pics">
            Cats
          </Link>
        </nav>

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/search-repo" element={<SearchReposMain />} />
          <Route path="/cats-pics" element={<CatsPics />} />
        </Routes>
      </Router>
    </div>
  );
}

export default NavigationMenu;
