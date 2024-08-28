import React, { useState } from "react";
import PromiseButton from "../SearchReposButtons/PromiseButton";

import SearchReposInput from "../SearchReposInput/SearchReposInput";
import SearchReposResults from "../SearchReposResults/SearchReposResults";

function SearchReposMain() {
  const [inputValue, setInputValue] = useState("");
  const [Repos, setRepos] = useState([]);


  return (
    <div className="SearchReposMain">
      <SearchReposInput onInputChange={setInputValue} />
      <PromiseButton inputValue={inputValue} onPromiseClick={setRepos}/>
      <SearchReposResults repos={Repos} />
    </div>
  );
}

export default SearchReposMain;
