window.addEventListener("load", solve);

function solve() {
  const allHitsContainer =
    document.getElementsByClassName("all-hits-container")[0];
  const inputGenre = document.getElementById("genre");
  const inputName = document.getElementById("name");
  const inputAuthor = document.getElementById("author");
  const inputDate = document.getElementById("date");
  const savedHits = document.getElementsByClassName("saved-container")[0];
  const addBtn = document.getElementById("add-btn");
  const totalLikes = document.querySelector(".likes > p")

  addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if(inputGenre.value === "" || inputName.value === "" || inputAuthor.value === "" || inputDate.value === "" ){
        return;
    }
    const divWithAllHits = createElement("div", "", allHitsContainer, "", [
      "hits-info",
    ]);

    createElement("img", "", divWithAllHits, "", "", {
      src: "./static/img/img.png"
    });

    createElement("h2", `Genre: ${inputGenre.value}`, divWithAllHits)

    createElement("h2", `Name: ${inputName.value}`, divWithAllHits);

    createElement("h2", `Author: ${inputAuthor.value}`, divWithAllHits);

    createElement("h3", `Date: ${inputDate.value}`, divWithAllHits);

    const saveBtn = createElement("button", "Save song", divWithAllHits, "", ['save-btn']);
    const likeBtn = createElement("button", "Like song", divWithAllHits, "", ['like-btn']);
    const deleteBtn = createElement("button", "Delete", divWithAllHits, "", ['delete-btn']);
    likeBtn.addEventListener("click", () =>{
        const regex = /\d+/;
        const match = totalLikes.textContent.match(regex);
        const likesCount = parseInt(match[0]);
        let likes = likesCount + 1
        totalLikes.textContent = `Total Likes: ${likes}`;
        if (likes >= 1){
            likeBtn.setAttribute("disabled", true);
        }
    });

    saveBtn.addEventListener("click", () => {
        allHitsContainer.removeChild(divWithAllHits);
        divWithAllHits.removeChild(saveBtn);
        divWithAllHits.removeChild(likeBtn);
        savedHits.appendChild(divWithAllHits);
    });

    deleteBtn.addEventListener("click", () => {
        if(allHitsContainer.contains(divWithAllHits)){
            allHitsContainer.removeChild(divWithAllHits);
        }
        else if(savedHits.contains(divWithAllHits)){
            savedHits.removeChild(divWithAllHits);
        }
        totalLikes.textContent = "Total likes: 0"
    });
    inputGenre.value = '';
    inputAuthor.value = '';
    inputName.value = '';
    inputDate.value = '';
  });

  function createElement(type, content, parentNode, id, classes, attributes) {
    const htmlElement = document.createElement(type);

    if (content && type !== "input") {
      htmlElement.textContent = content;
    }

    if (content && type === "input") {
      htmlElement.value = content;
    }

    if (id) {
      htmlElement.id = id;
    }

    if (classes && classes.length > 0) {
      htmlElement.classList.add(...classes);
    }

    if (attributes) {
      for (const key in attributes) {
        htmlElement.setAttribute(key, attributes[key]);
      }
    }

    if (parentNode) {
      parentNode.appendChild(htmlElement);
    }

    return htmlElement;
  }
}
