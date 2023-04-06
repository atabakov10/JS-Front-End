window.addEventListener('load', solve);

function solve() {
  const inputDOMSelectors = {
    make: document.getElementById("make"),
    model: document.getElementById("model"),
    year: document.getElementById("year"),
    fuel: document.getElementById("fuel"),
    originalCost: document.getElementById("original-cost"),
    sellPrice: document.getElementById("selling-price"),
  };

  const otherDOMSelectors = {
    btnPublish: document.getElementById("publish"),
    tableBody: document.getElementById("table-body"),
    form: document.querySelector("form"),
    ulList: document.getElementById("cars-list"),
    profit: document.getElementById("profit"),
  };

  otherDOMSelectors.btnPublish.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      inputDOMSelectors.make.value !== "" &&
      inputDOMSelectors.model.value !== "" &&
      inputDOMSelectors.fuel.value !== "" &&
      inputDOMSelectors.originalCost.value !== "" &&
      inputDOMSelectors.sellPrice.value !== "" &&
      inputDOMSelectors.year.value !== "" &&
      inputDOMSelectors.originalCost.value <= inputDOMSelectors.sellPrice.value
    ) {
      const tableRow = createElement(
        "tr",
        "",
        otherDOMSelectors.tableBody,
        "",
        ["row"]
      );

      createElement("td", inputDOMSelectors.make.value, tableRow);
      createElement("td", inputDOMSelectors.model.value, tableRow);
      createElement("td", inputDOMSelectors.year.value, tableRow);
      createElement("td", inputDOMSelectors.fuel.value, tableRow);
      createElement("td", inputDOMSelectors.originalCost.value, tableRow);
      createElement("td", inputDOMSelectors.sellPrice.value, tableRow);
      const buttonsTd = createElement("td", "", tableRow);
      const btnEdit = createElement("button", "Edit", buttonsTd, "", [
        "action-btn",
        "edit",
      ]);
      const btnSell = createElement("button", "Sell", buttonsTd, "", [
        "action-btn",
        "sell",
      ]);

      let make = inputDOMSelectors.make.value;
      let model = inputDOMSelectors.model.value;
      let year = inputDOMSelectors.year.value;
      let fuel = inputDOMSelectors.fuel.value;
      let cost = inputDOMSelectors.originalCost.value;
      let sellPrice = inputDOMSelectors.sellPrice.value;

      otherDOMSelectors.form.reset();
      inputDOMSelectors.year.value = "";
      inputDOMSelectors.fuel.value = "";

      btnEdit.addEventListener("click", () => {
        inputDOMSelectors.make.value = make;
        inputDOMSelectors.model.value = model;
        inputDOMSelectors.year.value = year;
        inputDOMSelectors.fuel.value = fuel;
        inputDOMSelectors.originalCost.value = cost;
        inputDOMSelectors.sellPrice.value = sellPrice;

        tableRow.remove();
      });

      btnSell.addEventListener("click", () => {
        const liList = createElement("li", "", otherDOMSelectors.ulList, "", [
          "each-list",
        ]);
        createElement("span", `${make} ${model}`, liList);
        createElement("span", year, liList);
        createElement("span", `${sellPrice - cost}`, liList);

        tableRow.remove();

        let num = Number(otherDOMSelectors.profit.textContent);
        num += Number(sellPrice - cost);
        otherDOMSelectors.profit.textContent = num.toFixed(2);
      });
    }
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
