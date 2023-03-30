function solve(input) {
    let pieces = {};
  
    // Read initial pieces
    let n = Number(input.shift());
    for (let i = 0; i < n; i++) {
      let [piece, composer, key] = input.shift().split("|");
      pieces[piece] = { composer, key };
    }
  
    // Process commands
    for (let line of input) {
      let [command, ...args] = line.split("|");
  
      if (command === "Add") {
        let [piece, composer, key] = args;
        if (pieces.hasOwnProperty(piece)) {
          console.log(`${piece} is already in the collection!`);
        } else {
          pieces[piece] = { composer, key };
          console.log(`${piece} by ${composer} in ${key} added to the collection!`);
        }
      } else if (command === "Remove") {
        let piece = args[0];
        if (pieces.hasOwnProperty(piece)) {
          delete pieces[piece];
          console.log(`Successfully removed ${piece}!`);
        } else {
          console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }
      } else if (command === "ChangeKey") {
        let [piece, newKey] = args;
        if (pieces.hasOwnProperty(piece)) {
          pieces[piece].key = newKey;
          console.log(`Changed the key of ${piece} to ${newKey}!`);
        } else {
          console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }
      } else if (command === "Stop") {
        break;
      } else {
        console.log(`Invalid command: ${command}`);
      }
    }
  
    // Print remaining pieces
    Object.keys(pieces).forEach(piece => {
        let composer = pieces[piece].composer;
        let key = pieces[piece].key;
        console.log(`${piece} -> Composer: ${composer}, Key: ${key}`);
      });
  }
  

  let input = [
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ]
  
  solve(input);
  