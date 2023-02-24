function solve(people, type, dayOfWeek) {
    let price = 0;
    let discount = 0;
    if(type === 'Students'){
        if(dayOfWeek === 'Friday'){
            price = 8.45 * people;
            if(people >= 30){
                discount = 0.15;
                price = price - (price * discount);
            }
        }
        else if(dayOfWeek === 'Saturday'){
            price = 9.80 * people;
            if(people >= 30){
                discount = 0.15;
                price = price - (price * discount);
            }
           
        }
        else if(dayOfWeek === 'Sunday'){
            price = 10.46 * people;
            if(people >= 30){
                discount = 0.15;
                price = price - (price * discount);
            }
        }

    }
    else if(type === 'Business'){
        if(people === 100){
            people = people - 10;
        }

        if(dayOfWeek === 'Friday'){
            price = 10.90 * people;
        }
        else if(dayOfWeek === 'Saturday'){
            price = 15.60 * people;
        }
        else if(dayOfWeek === 'Sunday'){
            price = 16 * people;
        }
    }
    else if(type === 'Regular'){
        if(dayOfWeek === 'Friday'){
            price = 15 * people;
        }
        else if(dayOfWeek === 'Saturday'){
            price = 20 * people;
        }
        else if(dayOfWeek === 'Sunday'){
            price = 22.50 * people;
        }

        if(people >= 10 && people <= 20){
            price -= price * 0.05;
        }
    }
    console.log(`Total price: ${price.toFixed(2)}`);
}
solve(40,

    "Regular",
    
    "Saturday")