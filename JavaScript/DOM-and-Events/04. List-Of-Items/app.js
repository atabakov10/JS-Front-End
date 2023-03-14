function addItem() {
    const newItemText = document.getElementById('newItemText');
    const listItems = document.getElementById('items')
    console.log(listItems.innerHTML += '<li>'+ newItemText.value +'</li>')
}