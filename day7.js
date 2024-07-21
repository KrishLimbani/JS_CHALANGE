// 1) create the object name Book and define the title, author name, and publish year and get the console the title and author name.

const Book = {
    Title: "The Future Way",
    Author: "Krish Limbani",
    year : 2025
}

console.log(Book.Title)
console.log(Book["Author"])


// 2) create method to get detail about book like title and authr name

Book.getDetails = function(){
    console.log(`Book title is ${this.Title}`)
    console.log(`Book Author is ${this.Author}`)
}

console.log(Book.getDetails())



// 3) create method to the Book Object that take a parameter (year) and update the book year property then log the publish Date


Book.changePublishDate = function(year){
    console.log(`Book title is ${this.Title}`)
    console.log(`Book publish in ${year}`)
}

console.log(Book.changePublishDate(2023))






