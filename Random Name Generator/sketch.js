// Arrays
// Kyle MacLean
// October 17, 2024

let names = ["John", "Bill", "Joe"]; //original array

function setup() {
  createCanvas(windowWidth, windowHeight);
  print(names); //original

  names.push("Liam");
  print(names); //added liam

  let lastName = names.pop(); //removed name from the back (Liam)
  print(lastName);
  print(names);

  let firstName = names.shift(); //removed name from the front (John)
  print(firstName);
  print(names);

  names.push("name1"); //adds many names to the back
  names.push("name2");
  names.push("name3");
  names.push("name4");
  names.push("name5");

  for(n of names){
    print(n); //prints off any name inside name
  }
}

function draw() {
  background(220);
}
