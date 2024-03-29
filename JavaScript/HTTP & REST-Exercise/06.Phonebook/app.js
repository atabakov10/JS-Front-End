function attachEvents() {
  const phonebookContainer = document.getElementById("phonebook");
  const loadBtn = document.getElementById("btnLoad");
  const personInput = document.getElementById("person");
  const phoneInput = document.getElementById("phone");
  const createBtn = document.getElementById("btnCreate");
  const BASE_URL = "http://localhost:3030/jsonstore/phonebook/";
  loadBtn.addEventListener("click", loadPhonebookHandler);
  createBtn.addEventListener("click", createPhoneBookHandler);
  async function loadPhonebookHandler() {
    try {
      const phoneBookRes = await fetch(BASE_URL);
      let phonebookData = await phoneBookRes.json();
      phonebookData = Object.values(phonebookData);
      phonebookContainer.innerHTML = "";
      for (const { phone, person, _id } of phonebookData) {
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.textContent = "Delete";
        button.id = _id;
        button.addEventListener("click", deletePhoneBookHandler);
        li.innerHTML = `${person}: ${phone}`;
        li.appendChild(button);
        phonebookContainer.appendChild(li);
      }
    } catch (error) {
      console.error(error);
    }
  }

  function createPhoneBookHandler() {
    const person = personInput.value;
    const phone = phoneInput.value;
    const httpHeaders = {
      method: "Post",
      body: JSON.stringify({ person, phone }),
    };

    fetch(BASE_URL, httpHeaders)
      .then((res) => res.json())
      .then(() => {
        loadPhonebookHandler();
        personInput.value = "";
        phoneInput.value = "";
      })
      .catch((err) => {
        console.error(err);
      });
  }
  async function deletePhoneBookHandler() {
    const id = this.id
    const httpHeaders = {
        method: "Delete",
    };

    fetch(`${BASE_URL}${id}`, httpHeaders)
    .then(loadPhonebookHandler)
    .catch((err) => {
        console.error(err);
    });
  }
}

attachEvents();
