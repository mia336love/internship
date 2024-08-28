// import userName from '../SearchReposInput'

function PromiseButton({ inputValue, onPromiseClick }) {
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
        // if (data.length === 0) {
        //   return;
        // }

        // data.forEach((repo) => {
        //   onPromiseClick(repo);
        //   // console.log(repo);
        //   console.log('Данные обработаны');
          
        // });

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
      <button onClick={getReposPromise}>Get Repositories (Promise)</button>
    </div>
  );
}

export default PromiseButton;
