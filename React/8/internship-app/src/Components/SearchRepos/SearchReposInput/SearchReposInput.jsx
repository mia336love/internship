function SearchReposInput( {onInputChange} ) {
  
  const handleInputChange = (event) => {
    onInputChange(event.target.value);
  };
  
  return (
        <div className="search-repos=results-main">
      <input type="text" placeholder="Enter GitHub username" onChange={handleInputChange} />
    </div>
  );
}

export default SearchReposInput;
