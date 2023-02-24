function solve(speed, area) {
    let speedLimit = 0;
    let status = '';
    let speedMoreThanSpeedLimit = 0;
    if(area === 'motorway'){
        speedLimit = 130;
    }
    else if(area === 'interstate'){
        speedLimit = 90;
    }
    else if(area === 'city'){
        speedLimit = 50;
    }
    else if(area === 'residential'){
        speedLimit = 20;
    }

    if(speedLimit >= speed){
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    }
    else if(speedLimit < speed ){
        speedMoreThanSpeedLimit = speed - speedLimit;
        if(speedMoreThanSpeedLimit <= 20){
            status = 'speeding';
            console.log(`The speed is ${speedMoreThanSpeedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        }
        else if(speedMoreThanSpeedLimit > 20 && speedMoreThanSpeedLimit <= 40){
            status = 'excessive speeding';
            console.log(`The speed is ${speedMoreThanSpeedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        }
        else{
            status = 'reckless driving';
            console.log(`The speed is ${speedMoreThanSpeedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        }
    }
}

solve(120, 'interstate');