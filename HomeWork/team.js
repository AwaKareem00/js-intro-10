/* TASK-3You are given a JS Array below:
Find the cheapest book in the bookstore           -> To Kill a Mockingbird
Find the most expensive book in the bookstore   -> Harry Potter and the Sorcerer's 
Stone
Find all Classic books         -> [ 'The Great Gatsby', 'To Kill a 
Mockingbird' ] */
const bookstore = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic",
        price: 9.99
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Classic",
        price: 7.99
    },
    {
        title: "The Hitchhiker's Guide to the Galaxy",
        author: "Douglas Adams",
        genre: "Science Fiction",
        price: 12.49
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        genre: "Fantasy",
        price: 14.99
    },
    {
        title: "The Da Vinci Code",
        author: "Dan Brown",
        genre: "Mystery",
        price: 10.99
    }
];

let cheapestBook = bookstore[0];
let mostExpensiveBook = bookstore[0];

for (let book of bookstore) {
if(book.price < cheapestBook.price) {
    cheapestBook = book;
}
if(book.price > mostExpensiveBook.price) {
    mostExpensiveBook = book;
}
}


console.log(cheapestBook.title);
console.log(mostExpensiveBook.title);


const classicBooks = bookstore.filter(book => book.genre === 'Classic').map(book => book.title);

console.log(classicBooks);



const shoppingCart = {
    userId: 12345,
    items: [
        {
            productId: 1,
            productName: 'Laptop',
            price: 999.00,
            quantity: 1,
            specifications: {
                brand: 'Dell',
                screen: '15.6 inches',
                processor: 'Intel Core i7'
            }
        },
        {
            productId: 2,
            productName: 'Smartphone',
            price: 499.00,
            quantity: 2,
            specifications: {
                brand: 'Apple',
                model: 'iPhone 12',
                color: 'Space Gray'
            }
        },
        {
            productId: 3,
            productName: 'Headphones',
            price: 149.00,
            quantity: 3,
            specifications: {
                brand: 'Sony',
                type: 'Over-ear',
                wireless: true
            }
        }
    ],
    shippingAddress: {
        street: '123 Main Street',
        city: 'Anytown',
        zipCode: '12345'
    },
    orderDate: '2023-08-29'
};