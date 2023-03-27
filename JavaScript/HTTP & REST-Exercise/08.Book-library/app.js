function attachEvents() {
  const loadBooks = document.getElementById("loadBooks");
  const booksContainer = document.querySelector("table > tbody");
  const BASE_URL = "http://localhost:3030/jsonstore/collections/books/";
  const submitBtn = document.querySelector("#form > button");
  const formHeader = document.querySelector("#form > h3");
  const titleInput = document.querySelector('#form > input[name="title"]');
  const authorInput = document.querySelector("#form > input[name=author]");
  let editBtnId = null;
  loadBooks.addEventListener("click", loadAllBooksHandler);
  submitBtn.addEventListener("click", submitBookHandler);

  async function loadAllBooksHandler() {
    booksContainer.innerHTML = "";
    const booksRes = await fetch(BASE_URL);
    const booksData = await booksRes.json();
    for (const bookId in booksData) {
      const { author, title } = booksData[bookId];
      const tableRow = createElement("tr", "", booksContainer);
      createElement("td", title, tableRow);
      createElement("td", author, tableRow);
      const buttonsColumn = createElement("td", "", tableRow);
      const editBtn = createElement("button", "Edit", buttonsColumn);
      const deleteBtn = createElement(
        "button",
        "Delete",
        buttonsColumn,
        bookId
      );

      editBtn.addEventListener("click", () => {
        editBtnId = bookId;
        formHeader.textContent = "Edit FORM";
        submitBtn.textContent = "Save";
        titleInput.value = title;
        authorInput.value = author;
      });
      deleteBtn.addEventListener("click", deleteBtnCLickHandler);
    }
  }

  async function deleteBtnCLickHandler() {
    const id = this.id;
    const httpHeaders = {
      method: "DELETE",
    };
    await fetch(BASE_URL + id, httpHeaders);
    loadAllBooksHandler();
  }

  function submitBookHandler() {
    const title = titleInput.value;
    const author = authorInput.value;
    const httpHeaders = {
      method: "POST",
      body: JSON.stringify({ author, title }),
    };
    let url = BASE_URL;
    if (formHeader.textContent === 'Edit FORM'){
      httpHeaders.method = 'PUT';
      url += editBtnId
    }

    fetch(url, httpHeaders);
    loadAllBooksHandler();
    if (formHeader.textContent === 'Edit FORM'){
      formHeader.textContent = 'FORM';
      submitBtn.textContent = 'Submit';
    }
    titleInput.value = "";
    authorInput.value = "";
  }
}

attachEvents();

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

  if (classes) {
    htmlElement.classList.add(...classes);
  }

  if (parentNode) {
    parentNode.appendChild(htmlElement);
  }

  if (attributes) {
    for (const key in attributes) {
      htmlElement.setAttribute(key, attributes[key]);
    }
  }

  return htmlElement;
}
