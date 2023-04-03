window.addEventListener("load", solve);

function solve() {
  const inputDOMSelectors = {
    firstName: document.getElementById("first-name"),
    lastName: document.getElementById("last-name"),
    numOfPeople: document.getElementById("people-count"),
    fromDate: document.getElementById("from-date"),
    days: document.getElementById("days-count"),
  };

  otherDOMSelectors = {
    nextStepBtn: document.getElementById("next-btn"),
    ulTickets: document.querySelector(".ticket-info-list"),
    ulConfirmedTickets: document.querySelector(".confirm-ticket")
  };

  const form = document.querySelector("form");
  const mainDiv = document.querySelector("#main")
  const body = document.querySelector("#body");

  otherDOMSelectors.nextStepBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      inputDOMSelectors.firstName.value === "" ||
      inputDOMSelectors.lastName.value === "" ||
      inputDOMSelectors.numOfPeople.value === "" ||
      inputDOMSelectors.fromDate.value === "" ||
      inputDOMSelectors.days.value === ""
    ) {
        return;
    }

    const listOfTicket = createElement("li", "", otherDOMSelectors.ulTickets, "", ['ticket']);
    const articleTicket = createElement("article", "", listOfTicket);
    createElement("h3", `Name: ${inputDOMSelectors.firstName.value} ${inputDOMSelectors.lastName.value}`, articleTicket);
    createElement("p", `From date: ${inputDOMSelectors.fromDate.value}`, articleTicket);
    createElement("p", `For ${inputDOMSelectors.days.value} days`, articleTicket);
    createElement("p", `For ${inputDOMSelectors.numOfPeople.value} people`, articleTicket);

    const editBtn = createElement("button", "Edit", listOfTicket, "", ['edit-btn']);
    const continueBtn = createElement("button", "Continue", listOfTicket, "", ['continue-btn']);

    let firstNameHolder = inputDOMSelectors.firstName.value;
    let lastNameHolder = inputDOMSelectors.lastName.value;
    let peopleCountHolder = inputDOMSelectors.numOfPeople.value;
    let fromDateHolder = inputDOMSelectors.fromDate.value;
    let daysHolder = inputDOMSelectors.days.value;
    form.reset();
    console.log(daysHolder);

    otherDOMSelectors.nextStepBtn.setAttribute("disabled", true);
    editBtn.addEventListener("click", () =>{
        otherDOMSelectors.ulTickets.removeChild(listOfTicket);
        inputDOMSelectors.firstName.value = firstNameHolder;
        inputDOMSelectors.lastName.value = lastNameHolder;
        inputDOMSelectors.numOfPeople.value = peopleCountHolder;
        inputDOMSelectors.fromDate.value = fromDateHolder;
        inputDOMSelectors.days.value = daysHolder;

        otherDOMSelectors.nextStepBtn.removeAttribute("disabled");
    });

    continueBtn.addEventListener("click", () =>{
        otherDOMSelectors.ulConfirmedTickets.appendChild(listOfTicket);
        editBtn.remove();
        continueBtn.remove();
        const confirmBtn = createElement("button", "Confirm", listOfTicket, "",['confirm-btn']);
        const cancelBtn = createElement("button", "Cancel", listOfTicket, "",['cancel-btn']);

        cancelBtn.addEventListener("click", () => {
            otherDOMSelectors.ulConfirmedTickets.removeChild(listOfTicket);
            otherDOMSelectors.nextStepBtn.removeAttribute("disabled");
        });

        confirmBtn.addEventListener("click", () => {
            otherDOMSelectors.ulConfirmedTickets.removeChild(listOfTicket);
            otherDOMSelectors.nextStepBtn.removeAttribute("disabled");
            mainDiv.style.display = "none";
            const h1 = createElement("h1", "Thank you, have a nice day!", body, "thank-you");
            const backBtn = createElement("button", "Back", body, "back-btn");

            backBtn.addEventListener("click", () => {
                mainDiv.style.display = "block"
                h1.remove();
                backBtn.remove();
            });
        });
    });
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
