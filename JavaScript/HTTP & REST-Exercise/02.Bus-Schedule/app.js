function solve() {
    const departButton = document.getElementById('depart');
        const arriveButton = document.getElementById('arrive');
        const departButtonVal = departButton.value;
        const arriveButtonValue = arriveButton.value
        const info = document.getElementsByClassName('info')[0];
        const BASE_URL = 'http://localhost:3030/jsonstore/bus/schedule/'
       
    function depart() {
        info.innerHTML = '';
        if (arriveButtonValue.disabled){
            departButton.disabled = false;
        }
        else{
            departButton.disabled = true;
            arriveButton.disabled = false;
        }
        fetch(`${BASE_URL}depot`)
        .then((res) => res.json())
        .then((data) => {
            info.textContent = `Next stop ${data.name}`
        })
    }

    async function arrive() {
        if (departButtonVal.disabled){
            arriveButton.disabled = false;
        }
        else{
            arriveButton.disabled = true;
            departButton.disabled = false;
        }
        fetch(`${BASE_URL}depot`)
        .then((res) => res.json())
        .then((data) => {
            info.textContent = `Arriving at ${data.name}`
        })

    }

    return {
        depart,
        arrive
    };
}

let result = solve();