function login(data) {
    let counter = 0;
    let rightPassword = '';
    let userName = data[0];
    let userNameSplit = userName.split('');
    for (let index = userNameSplit.length - 1; index >= 0; index--) {
        rightPassword += userNameSplit[index];
    }
    for (let index = 0; index < data.length; index++) {
        if (rightPassword === data[index]) {
            console.log(`User ${userName} logged in.`);
            break;
        }
        else if (counter < data.length) {
            if (counter > 0 && counter < 4) {
                console.log('Incorrect password. Try again.');
            }
            else if (counter === 4){
                console.log(`User ${userName} blocked!`);
                break;
            }
            counter++;
            continue;
        }
    }
}
login(['sunny','rainy','cloudy','sunny','not sunny']);