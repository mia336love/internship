import './App.css';
import Blog from './Components/Blog/Blog';

// import NavigationMenu from './Components/NavigationMenu/NavigationMenu';
import ScrollPosition from './Components/ScrollPosition/ScrollPosition';
import SearchReposMain from './Components/SearchRepos/SearchReposMain';

const App = () => {
  return (
    <div className="App">
      {/* <NavigationMenu /> */}

      {/* <SearchReposMain />
      <ScrollPosition /> */}

      <Blog />
    </div>
  );
}

export default App;
