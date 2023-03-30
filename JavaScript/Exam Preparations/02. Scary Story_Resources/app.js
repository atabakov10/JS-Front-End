window.addEventListener("load", solve);
 
function solve() {
  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const age = document.getElementById("age");
  const title = document.getElementById("story-title");
  const genreSelect = document.getElementById("genre");
  const previewUl = document.getElementById("preview-list");
  const publishBtn = document.getElementById('form-btn');
  const storyText = document.getElementById("story");
  const form = document.querySelector('#main > div.form-wrapper > form');
 
  
  publishBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (firstName.value == ''
    || lastName.value == ''
    || age.value == ''
    || title.value == ''
    || storyText.value == '') {
    return;
  }
    const list = createElement('li', "", previewUl, "", "story-info");
    const article = createElement('article', "", list)
 
    createElement('h4', `Name: ${firstName.value} ${lastName.value}`, article);
    createElement('p', `Age: ${age.value}`, article);
    createElement('p', `Title: ${title.value}`, article);
    createElement('p', `Genre: ${genreSelect.value}`, article);
    createElement('p', storyText.value, article);
 
    const saveBtn = createElement('button', 'Save Story', list, "", 'save-btn');
   const editBtn = createElement('button', 'Edit Story', list, "", 'edit-btn');
   const deleteBtn = createElement('button', 'Delete Story', list, "", 'delete-btn');
 
    e.target.setAttribute('disabled', 'disabled');
 
    let firstNameHolder = firstName.value;
    let lastNameHolder = lastName.value;
    let ageHolder = age.value;
    let titleHolder = title.value;
    let storyTextHolder = storyText.value;
 
    form.reset();
 
    editBtn.addEventListener('click', () =>{
      list.innerHTML = '';
      previewUl.removeChild(list);
      firstName.value = firstNameHolder;
      lastName.value = lastNameHolder;
      age.value = ageHolder;
      title.value = titleHolder;
      storyText.value = storyTextHolder;
      publishBtn.removeAttribute('disabled');
      saveBtn.setAttribute('disabled', 'disabled');
      editBtn.setAttribute('disabled', 'disabled');
      deleteBtn.setAttribute('disabled', 'disabled');
    });
 
    saveBtn.addEventListener('click', () =>{
      const main = document.querySelector('#main');
      main.innerHTML = '';
      createElement('h1', "Your scary story is saved!", main);
    });
 
    deleteBtn.addEventListener('click', () =>{
      list.innerHTML = '';
      previewUl.removeChild(list);
      publishBtn.removeAttribute('disabled');
    });
  });
function createElement(type, content, parentNode, id, classes, attributes) {
  const htmlElement = document.createElement(type);
 
  if (content && type !== 'input'){
    htmlElement.textContent = content;
  }
 
  if (content && type === 'input'){
    htmlElement.value = content;
  }
 
  if(id){
    htmlElement.id = id;
  }
 
  if (classes) {
    htmlElement.classList.add(classes);
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
 
}