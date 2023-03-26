function attachEvents() {
  const BASE_URL = "http://localhost:3030/jsonstore/collections/students";
  const allInputs = document.getElementsByClassName("inputs");
  const firstNameInput = document.querySelector(".inputs > input:nth-child(1)");
  const lastNameInput = document.querySelector(".inputs > input:nth-child(2)");
  const facultyNumberInput = document.querySelector(
    ".inputs > input:nth-child(3)"
  );
  const gradeInput = document.querySelector(".inputs > input:nth-child(4)");
  const submitBtn = document.getElementById("submit");
  const tableBody = document.querySelector("tbody");
  submitBtn.addEventListener("click", submitBtnHandler);
  
  fetch(BASE_URL)
    .then((res) => res.json())
    .then((data) => {
      for (const studentId in data) {
        const { facultyNumber, firstName, grade, lastName } = data[studentId];
        const tRow = createElement("tr", "", tableBody);
        createElement("td", firstName, tRow);
        createElement("td", lastName, tRow);
        createElement("td", facultyNumber, tRow);
        createElement("td", grade, tRow);
      }
    });

  function submitBtnHandler() {
    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const facultyNumber = facultyNumberInput.value;
    const grade = gradeInput.value;

    const httpHeaders = {
      method: "POST",
      body: JSON.stringify({ firstName, lastName, facultyNumber, grade }),
    };

    fetch(BASE_URL, httpHeaders);
    tableBody.innerHTML = '';
    fetch(BASE_URL)
    .then((res) => res.json())
    .then((data) => {
      for (const studentId in data) {
        const { facultyNumber, firstName, grade, lastName } = data[studentId];
        const tRow = createElement("tr", "", tableBody);
        createElement("td", firstName, tRow);
        createElement("td", lastName, tRow);
        createElement("td", facultyNumber, tRow);
        createElement("td", grade, tRow);
      }
    });
    firstNameInput.value = '';
    lastNameInput.value = '';
    facultyNumberInput.value = '';
    gradeInput.value = '';
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
