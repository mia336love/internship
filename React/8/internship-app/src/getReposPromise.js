function getReposPromise() {
    // const username = document.getElementById('username').value;
    
    const username = 'mia336love'
    const url = `https://api.github.com/users/${username}/repos`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            const repoList = document.getElementById('repo-list');
            repoList.innerHTML = '';

            if (data.length === 0) {
                const noReposMessage = document.createElement('li');
                noReposMessage.textContent = 'No repositories found for this user.';
                repoList.appendChild(noReposMessage);
                return;
            }

            data.forEach(repo => {
                const listItem = document.createElement('li');
                listItem.textContent = repo.name;
                repoList.appendChild(listItem);
            });
        })
        .catch(error => {
            const repoList = document.getElementById('repo-list');
            repoList.innerHTML = '';

            const errorMessage = document.createElement('li');
            errorMessage.textContent = `Error: ${error.message}`;
            repoList.appendChild(errorMessage);

            console.error('There has been a problem with your fetch operation:', error);
        });
}

export default getReposPromise;
