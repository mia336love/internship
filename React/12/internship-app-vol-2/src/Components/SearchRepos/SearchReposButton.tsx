import Repo from './Repo'

interface PromiseButtonProps {
    inputValue: string;
    onPromiseClick: (value: Repo[]) => void
}

function PromiseButton({ inputValue, onPromiseClick }: PromiseButtonProps) {
    function getReposPromise() {
      const userName = inputValue;
      const url = `https://api.github.com/users/${userName}/repos`;
  
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `Network response was not ok: ${response.status} ${response.statusText}`
            );
          }
          return response.json();
        })
        .then((data) => {
          onPromiseClick(data)
        })
        .catch((error) => {
          console.error(
            "There has been a problem with your fetch operation:",
            error
          );
        });
    }
  
    return (
      <div className="promise-button">
        <button onClick={getReposPromise}>Get Repositories</button>
      </div>
    );
  }
  
  export default PromiseButton;
  