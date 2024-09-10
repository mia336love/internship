import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import Home from "../Home/Home";

import SearchReposMain from "../SearchRepos/SearchReposMain/SearchReposMain";
import CatsPics from "../CatsPics/CatsPics";
import Blog from "../Blog/Blog";

import styles from "./NavigationMenu.module.css";
import ScrollPosition from "../Blog/ScrollPosition";

function NavigationMenu() {
  return (
    <div className={styles.navigationMenuMain}>
      <Router>
        <nav className={styles.navMenu}>
          <Link className={styles.link} to="/">
            Home
          </Link>

          <p className={styles.iterationNumbers}>8-9:</p>

          <Link className={styles.link} to="/search-repo">
            Search repos
          </Link>
          <Link className={styles.link} to="/cats-pics">
            Cats
          </Link>

          <p className={styles.iterationNumbers}>10:</p>

          <Link className={styles.link} to="/blog">
            Blog
          </Link>
          <Link className={styles.link} to="/scroll">
            Scroll
          </Link>
        </nav>

        <Routes>
          {/* 8-9 */}
          <Route path="/" exact element={<Home />} />
          <Route path="/search-repo" element={<SearchReposMain />} />
          <Route path="/cats-pics" element={<CatsPics />} />

          {/* 10 */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/scroll" element={<ScrollPosition />} />
        </Routes>
      </Router>
    </div>
  );
}

export default NavigationMenu;
