function solve(num, ...operations) {
    num = parseInt(num);
    
      for (let index = 0; index < operations.length; index++) {
        if(operations[index] === 'chop'){
            num = num/2;
    }
  else if(operations[index] === 'dice'){
            num = Math.sqrt(num);
    }
 else if(operations[index] === 'spice'){
      num = num + 1;
        }
        else if(operations[index] === 'bake'){
            num = num * 3;
        }
        else if(operations[index] === 'fillet'){
            num = num - (num * 0.20);
        }
        console.log(num)
      }
}

solve('9', 'dice', 'spice', 'chop', 'bake',

'fillet')