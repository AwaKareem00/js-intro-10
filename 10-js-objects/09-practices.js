/*
Create a student object with below info
firstName : Alex
lastName : Smith
hobbies : Soccer - Watching movies
exam_scores : midterm: 60 and final: 90

Output your object to the console
*/

const student1 = {
    firstName: 'Alex',
    lastName: 'Smith',
    hobbies: [ 'Soccer', 'Watching movies' ],
    exam_scores: {
        midterm: 60,
        final: 90
    }
};

console.log(student1);

console.log(student1.hobbies);
console.log(student1.exam_scores);
console.log(student1.hobbies[0]);

console.log('\n------Find and print average of exam scores -> 75------');

const allScores = Object.values(student1.exam_scores);

let sum = 0;

for(const score of allScores) {
    sum += score;
}

console.log(sum / allScores.length);

console.log('\n-------Book Object--------');

/*
Create a book object
name is Amok
author's first name is Stefan
author's last name is Zweig
genre is Novella
*/

const books = [
    {
      name: "Amok",
      author: {
        fname: "Stefan",
        lname: "Zweig",
      },
      genre: "Novella",
    },
    {
      name: "My Name Is Red",
      author: {
        fname: "Orhan",
        lname: "Pamuk",
      },
      genre: "Historical Novel",
    },
    {
      name: "1984",
      author: {
        fname: "George",
        lname: "Orwell",
      },
      genre: "Dystopian Literature",
    },
  ];
  
  // Count the books where Author first name has an 'a' -> 2

let counter = 0;

for(const book of books) {
    if(book.author.fname.toLowerCase().includes('a')) counter++;
}

//for(let i = 0; i < books.length; i++) {
//    if (books[i].author.fname.toLowerCase().includes('a')) counter++
//}

console.log(counter);

const bookNames = [];

for(const book of books) {
    bookNames.push(book.name);
}

console.log(bookNames);


