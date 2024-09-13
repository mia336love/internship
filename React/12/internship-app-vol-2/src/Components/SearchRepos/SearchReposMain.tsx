import React, { useState } from "react";
import SearchReposButton from "../SearchRepos/SearchReposButton";

import SearchReposInput from "../SearchRepos/SearchReposInput";
import SearchReposResults from "../SearchRepos/SearchReposResults";

import Repo from './Repo'

function SearchReposMain() {
  const [inputValue, setInputValue] = useState<string>("");
  const [repos, setRepos] = useState<Repo[]>([]);


  return (
    <div className="SearchReposMain">
      <SearchReposInput onInputChange={setInputValue} />
      <SearchReposButton inputValue={inputValue} onPromiseClick={setRepos}/>
      <SearchReposResults repos={repos} />
    </div>
  );
}

export default SearchReposMain;
