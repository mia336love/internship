import React from "react";

import Repo from './Repo'

interface SearchReposResultsProps {
    repos: Repo[]
}

function SearchReposResults({ repos }: SearchReposResultsProps) {
    const renderReposResults = () => {
        if (repos.length === 0) {
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
