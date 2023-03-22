function loadRepos() {
   const BASE_URL = 'https://api.github.com/users/testnakov/repos';
   const resultContainer = document.getElementById('res');
   fetch(BASE_URL, {method: 'GET'})
   .then((res) => res.json())
   .then((data) => {
      resultContainer.textContent = data[0];
      console.log(data[0])
   })
   .catch((err) => {
      console.log(err);
   });
}