function solve(names) {
   let sortedNamesAscending = names.sort((aName, bName)=>{
       let result = aName.localeCompare(bName);
       return result;
   });
    for (let index = 0; index < sortedNamesAscending.length; index++) {
        console.log(`${index+1}.${sortedNamesAscending[index]}`)
    }
}

solve(["John",

    "Bob",

    "Christina",

    "Ema"])