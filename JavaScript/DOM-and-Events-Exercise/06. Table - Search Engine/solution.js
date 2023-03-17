function solve() {
   const searchInput = document.getElementById('searchField');
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const searchedWord = searchInput.value;
      const tRows = Array.from(document.querySelectorAll('tbody > tr'));
      for (const row of tRows) {
         let trimmedTextContent = row.textContent.trim();

         if (row.classList.contains('select')){
            row.classList.remove('select');
         }

         if(trimmedTextContent.includes(searchedWord)){
            row.classList.add('select');
         }
      }
      searchInput.value = '';
   }
}