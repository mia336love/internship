function SearchReposResults({ repos }) {
  return (
    <div className="search-repos-results-main">
      {repos.length > 0 ? (
        <ul>
          {repos.map((repo) => (
            <li key={repo.id}>{repo.name}</li>
          ))}
        </ul>
      ) : (
        <p>No repositories found...</p>
      )}
    </div>
  );
}

export default SearchReposResults;
