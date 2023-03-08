function objectFunc(object) {
    let person = JSON.parse(object);
  for (const key in person) {
    console.log(`${key}: ${person[key]}`);
  }
   
}
objectFunc('{"name": "Peter", "age": 35, "town": "Plovdiv"}');