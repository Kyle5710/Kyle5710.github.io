// Intro to Objects
// Kyle MacLean
// October 10, 2024

let myBook;
let myBook2;
let myBook3;

let allBooks = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  myBook = new Book("CS30 Text", "Mr. Scott", 1234567891011, "leatherbound", 515, width*0.3);
  myBook2 = new Book("Shrek", "William Steig", 5475634854638, "softcover", 255, width*0.34);
  myBook3 = new Book("Among Us: The Book", "Xander", 9462374637242, "hardcover", 876, width*0.4);
}

function draw() {
  allBooks = [myBook, myBook2, myBook3];
  background(220);
  myBook.display();
  myBook2.display();
  myBook3.display();
}

class Book{ //classes are capitalized
  //1. constructor
  constructor(title, author, isbn, cover, pages, x){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.coverType = cover;
    this.pageCount = pages;
    this.x = x;
  }

  //2. class methods
  display(){
    //render our book on the screen
    rectMode(CENTER); 
    textAlign(CENTER, CENTER);
    textSize(20);

    switch(this.coverType){
    case "softcover":
      fill(250, 200, 150);
      break;
      
    case "hardcover":
      fill(120, 255, 255);
      break;
      
    case "leatherbound":
      fill(150, 100, 15);
      break;
    }

    rect(this.x, height/2, this.pageCount/10, 150);
    fill(255);
    text(this.title[0], this.x, height/2 - 50);
  }

  printOut(){
    //print out our data in a nice format
    print(this.title + ", by " + this.author);
    print("Length: " + this.pageCount + " pages");
    print("ISBN: " + this.isbn);
  }
}
