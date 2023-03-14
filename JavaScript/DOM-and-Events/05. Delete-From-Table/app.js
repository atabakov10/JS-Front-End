function deleteByEmail() {
    const emails = document.querySelectorAll('#customers > tbody > tr > td');
    const emailToDelete = document.getElementsByTagName('input')[0];
    const divName = document.getElementsByTagName('div')[0];
    for (const email of emails) {
        if (email.textContent == emailToDelete.value){
            email.parentElement.remove();
            divName.textContent = "Deleted."
        }else {
            divName.textContent = "Not found."

        }
    }
}