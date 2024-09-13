import { Link } from 'react-router-dom';

import './NavigationMenu.css'

const NavigationMenu = () => {
  return (
    <nav className='navMenu'>
          <Link className='link' to="/">Home</Link>

          <Link className='link' to="/scroll">ScrollPosition</Link>
     
          <Link className='link' to="/search-repos">SearchReposMain</Link>

          <Link className='link' to="/blog">Blog</Link>
    </nav>
  );
};

export default NavigationMenu;
