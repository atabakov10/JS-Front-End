function solve() {
    const inputDOMSelectors = {
        name: document.getElementById('recipientName'),
        title: document.getElementById('title'),
        message: document.getElementById('message'),
    }

    const otherDOMSelectors = {
        btnAdd: document.getElementById('add'),
        btnReset: document.getElementById('reset'),
        form: document.querySelector('form'),
        ulListMails: document.getElementById('list'),
        ulSentMails: document.getElementsByClassName('sent-list')[0],
        ulDeletedMails: document.getElementsByClassName('delete-list')[0],
    }

    otherDOMSelectors.btnAdd.addEventListener('click', (e) => {
        e.preventDefault();
        if (inputDOMSelectors.name.value === ''
        || inputDOMSelectors.title.value === ''
        || inputDOMSelectors.message.value === ''){
            return;
        }

        const liEl = createElement('li', "", otherDOMSelectors.ulListMails);
        createElement('h4', `Title: ${inputDOMSelectors.title.value}`, liEl)
        createElement('h4', `Recipient Name: ${inputDOMSelectors.name.value}`, liEl);
        createElement('span', inputDOMSelectors.message.value, liEl);
        const btnDiv = createElement('div', "", liEl, "list-action");
        const btnSend = createElement('button', 'Send', btnDiv, "send")
        btnSend.type = 'submit';
        const btnDelete = createElement('button', 'Delete', btnDiv, "delete");
        btnDelete.type = 'submit';

        let name = inputDOMSelectors.name.value;
        let title = inputDOMSelectors.title.value;

        inputDOMSelectors.name.value = '';
        inputDOMSelectors.message.value = '';
        inputDOMSelectors.title.value = '';

        btnSend.addEventListener('click', () =>{
            otherDOMSelectors.ulListMails.removeChild(liEl);
            const liElementSentMails = createElement('li', "", otherDOMSelectors.ulSentMails);
            createElement('span', `To: ${name}`, liElementSentMails);
            createElement('span', ` Title: ${title}`, liElementSentMails)
            const btnsDivSentMails = createElement('div', "", liElementSentMails, "", ['btn']);
            const btnDeleteSentMails = createElement('button', "Delete", btnsDivSentMails, "", ['delete']);
            btnDeleteSentMails.type = 'submit';

            btnSend.remove();

            btnDeleteSentMails.addEventListener('click', () => {
                const liDelete = createElement('li', "", otherDOMSelectors.ulDeletedMails);
            createElement('span', `To: ${name}`, liDelete);
            createElement('span', ` Title: ${title}`, liDelete);
            liElementSentMails.remove();
            });
        });

        btnDelete.addEventListener('click', () => {
            const liDelete = createElement('li', "", otherDOMSelectors.ulDeletedMails);
            createElement('span', `To: ${name}`, liDelete);
            createElement('span', ` Title: ${title}`, liDelete);
            liEl.remove();
        });
    });

    otherDOMSelectors.btnReset.addEventListener('click', (e) => {
        e.preventDefault();
        inputDOMSelectors.name.value = '';
        inputDOMSelectors.message.value = '';
        inputDOMSelectors.title.value = '';
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
solve()