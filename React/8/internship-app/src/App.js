// import logo from './logo.svg';
import './App.css';
import AsyncButton from './Components/SearchReposButtons/AsyncButton';
import PromiseButton from './Components/SearchReposButtons/PromiseButton';

import SearchReposInput from './Components/SearchReposInput/SearchReposInput';
import SearchReposResults from './Components/SearchReposResults/SearchReposResults'

function App() {
  return (
    <div className="App">
      <SearchReposInput />

      <PromiseButton />
      <AsyncButton />

      <SearchReposResults />

    </div>
  );
}

export default App;
