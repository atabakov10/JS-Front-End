function toggle() {
    const moreBtn = document.getElementsByClassName('button')[0];
    const extraDiv = document.getElementById('extra');    
        if(extraDiv.style.display === 'block'){
            extraDiv.style.display = 'none';
            moreBtn.textContent = 'More'
        }
        else{
        extraDiv.style.display = 'block'
        moreBtn.textContent = 'Less'
        }
}