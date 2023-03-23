function loadRepos() {
  const BASE_URL = "https://api.github.com/users/";
  const repos = document.getElementById("repos");
  const username = document.getElementById("username");
  const usernameVal = username.value;
  repos.innerHTML = "";
  fetch(`${BASE_URL}${usernameVal}/repos`)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((repo) => {
        const a = document.createElement("a");
        const li = document.createElement("li");
		a.href = repo.full_name;
		a.textContent = repo.full_name;
        li.appendChild(a);
        repos.appendChild(li);
      });
    })
    .catch((err) => {
		const li = document.createElement("li");
		li.textContent = err.message;
		console.log(err);
      repos.appendChild(li)
    });
}
