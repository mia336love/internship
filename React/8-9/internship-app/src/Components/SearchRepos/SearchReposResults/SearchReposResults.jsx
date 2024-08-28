import React from "react";

function SearchReposResults({ repos }) {
  const renderReposResults = () => {
    if (repos === 0) {
      return React.createElement("p", null, "No repositories found...");
    }

    const reposList = repos.map((repo) => {
      return React.createElement("li", { key: repo.id }, repo.name);
    });

    return React.createElement("ul", null, ...reposList);
  };

  return React.createElement(
    "div",
    { className: "search-repos-results-main" },
    renderReposResults()
  );
}

export default SearchReposResults;
