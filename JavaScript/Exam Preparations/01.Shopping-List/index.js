function shoppingList(commands) {
    let groceries = commands[0].split("!");
  
    for (let i = 1; i < commands.length; i++) {
      let command = commands[i].split(" ");
      let action = command[0];
      let item = command[1];
  
      if (action === "Urgent") {
        if (!groceries.includes(item)) {
          groceries.unshift(item);
        }
      } else if (action === "Unnecessary") {
        let index = groceries.indexOf(item);
        if (index !== -1) {
          groceries.splice(index, 1);
        }
      } else if (action === "Correct") {
        let index = groceries.indexOf(item);
        if (index !== -1) {
          groceries[index] = command[2];
        }
      } else if (action === "Rearrange") {
        let index = groceries.indexOf(item);
        if (index !== -1) {
          let removed = groceries.splice(index, 1);
          groceries.push(removed[0]);
        }
      } else if (action === "Go" && item === "Shopping!") {
        console.log(groceries.join(", "));
      }
    }
  }
  
  shoppingList(((["Milk!Pepper!Salt!Water!Banana",

  "Urgent Salt",
  
  "Unnecessary Grapes",
  
  "Correct Pepper Onion",
  
  "Rearrange Grapes",
  
  "Correct Tomatoes Potatoes",
  
  "Go Shopping!"])));
  