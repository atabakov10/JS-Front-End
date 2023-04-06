function solve() {
    
    const inputDOMSelectors = {
        firstName: document.getElementById('fname'),
        lastName: document.getElementById('lname'),
        email: document.getElementById('email'),
        birth: document.getElementById('birth'),
        position: document.getElementById('position'),
        salary: document.getElementById('salary')
    }

    const otherDOMSelectors = {
        btnAdd: document.getElementById('add-worker'),
        form: document.querySelector('form'),
        tBody: document.getElementById('tbody'),
        budget: document.getElementById('sum'),
    }

    otherDOMSelectors.btnAdd.addEventListener('click', (e) =>{
        e.preventDefault();
        if(inputDOMSelectors.firstName.value === ''
        || inputDOMSelectors.email.value === ''
        || inputDOMSelectors.lastName.value === ''
        || inputDOMSelectors.position.value === ''
        || inputDOMSelectors.salary.value === ''
        || inputDOMSelectors.birth.value === '') {
            return;
        }

        const tRow = createElement('tr', "", otherDOMSelectors.tBody);

        createElement('td', inputDOMSelectors.firstName.value, tRow);
        createElement('td', inputDOMSelectors.lastName.value, tRow);
        createElement('td', inputDOMSelectors.email.value, tRow);
        createElement('td', inputDOMSelectors.birth.value, tRow);
        createElement('td', inputDOMSelectors.position.value, tRow);
        createElement('td', inputDOMSelectors.salary.value, tRow);

        let firstName = inputDOMSelectors.firstName.value;
        let lastName = inputDOMSelectors.lastName.value;
        let email = inputDOMSelectors.email.value;
        let birth = inputDOMSelectors.birth.value;
        let position = inputDOMSelectors.position.value;
        let salary = inputDOMSelectors.salary.value;

        const buttonsTd = createElement('td', "", tRow);
        const btnFired = createElement('button', "Fired", buttonsTd, "", ['fired']);
        const btnEdit = createElement('button', "Edit", buttonsTd, "", ['edit']);

        otherDOMSelectors.form.reset();

        let num = Number(otherDOMSelectors.budget.textContent);
        num += Number(salary);
        otherDOMSelectors.budget.textContent = num.toFixed(2);

        btnEdit.addEventListener("click", () =>{
            tRow.remove();
            inputDOMSelectors.firstName.value = firstName;
            inputDOMSelectors.lastName.value = lastName;
            inputDOMSelectors.email.value = email;
            inputDOMSelectors.birth.value = birth;
            inputDOMSelectors.position.value = position;
            inputDOMSelectors.salary.value = salary

            let divideNum = Number(otherDOMSelectors.budget.textContent);
            divideNum -= Number(salary)
            otherDOMSelectors.budget.textContent = divideNum.toFixed(2);
        })

        btnFired.addEventListener("click", () => {
            tRow.remove();

            let divideNum = Number(otherDOMSelectors.budget.textContent);
            divideNum -= Number(salary)
            otherDOMSelectors.budget.textContent = divideNum.toFixed(2);
        });
    })


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
solve()