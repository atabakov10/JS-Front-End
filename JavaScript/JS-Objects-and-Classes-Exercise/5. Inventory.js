function inventory(input) {
    let array = [];
    for (const lines of input) {
        let [Hero, level, items] = lines.split(' / ');
        let currentHero = {Hero, level, items}
        array.push(currentHero);
    }
    let sortedArray = array.sort((a, b) => a.level - b.level);
    for (const heroArgs of sortedArray) {
        console.log(`Hero: ${heroArgs.Hero}`);
        console.log(`level => ${heroArgs.level}`);
        console.log(`items => ${heroArgs.items}`);
    }
}

inventory([

    'Isacc / 25 / Apple, GravityGun',
    
    'Derek / 12 / BarrelVest, DestructionSword',
    
    'Hes / 1 / Desolator, Sentinel, Antara'
    
    ])