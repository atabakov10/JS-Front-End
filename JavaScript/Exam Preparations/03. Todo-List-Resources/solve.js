function attachEvents() {
  const BASE_URL = "http://localhost:3030/jsonstore/tasks/";
  const loadBtn = document.getElementById("load-button");
  const toDoList = document.getElementById("todo-list");
  const addBtn = document.getElementById("add-button");
  const titleToAdd = document.getElementById("title");
  loadBtn.addEventListener("click", loadBtnClickHandler);
  addBtn.addEventListener("click", addBtnClickHandler);
  let editBtnId = null;
  let inputName = null;

  async function loadBtnClickHandler(e) {
    e.preventDefault();
    toDoList.innerHTML = "";
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        for (const taskId in data) {
          const { name, _id } = data[taskId];
          const liToDoList = createElement("li", "", toDoList);
          const spanData = createElement("span", name, liToDoList);
          const deleteBtn = createElement("button", "Remove", liToDoList, _id);
          const editBtn = createElement("button", "Edit", liToDoList, _id);

          deleteBtn.addEventListener("click", deleteBtnClickedHandler);
          editBtn.addEventListener("click", async () => {
            editBtnId = _id;
            if (editBtn.textContent === "Edit") {
              inputName = createElement("input", "", liToDoList);
              inputName.value = name;
              editBtn.textContent = "Submit";
              liToDoList.replaceChild(inputName, spanData);
            } else if (editBtn.textContent === "Submit") {
              const httpHeaders = {
                method: "PUT",
                body: JSON.stringify({ name: inputName.value }), // get the value of the input element
              };
              await fetch(BASE_URL + editBtnId, httpHeaders);
              liToDoList.replaceChild(spanData, inputName);
              loadBtnClickHandler(e);
            }
          });
        }
      });
  }

  async function deleteBtnClickedHandler(e) {
    id = this.id;
    const httpHeaders = {
      method: "DELETE",
    };
    await fetch(BASE_URL + id, httpHeaders);
    loadBtnClickHandler(e);
  }

  async function addBtnClickHandler(e) {
    e.preventDefault();
    const name = titleToAdd.value;
    const httpHeaders = {
      method: "POST",
      body: JSON.stringify({ name }),
    };
    fetch(BASE_URL, httpHeaders);
    loadBtnClickHandler(e);
    titleToAdd.value = "";
  }
}

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

attachEvents();
