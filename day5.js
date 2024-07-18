
// 1) write a function to check if a number is even or odd and return the result

function checkEvenOdd(num){
    if(num % 2 == 0){
        console.log(`${num} is Even`)
    }else{
        console.log(`${num} is Odd`)
    }
}

// 2) write a function to calculate the square of a number

const check = checkEvenOdd(23);
console.log(check)


// 3) write a function to find the maximum of two number

function squareOfNumber(num){
    return num*num;
}

const n = squareOfNumber(2)
console.log(n)


// 4) write a function to concatenate two string

function toConcatenateString(str1 , str2){
    return str1 + str2
}

const str = toConcatenateString("krish","limbani")
console.log(str)

// 5) write a function to calculte sum of the two number

const func = (num1, num2)=>{
    return num1 + num2;
}

console.log(func(23,23))


// 6) write a function to check if a string contain specific character and return a boolean value

const checkCharactor = (str, char) => {
    return str.includes(char);
}

const name = "Virat Kohli"
console.log(checkCharactor(name, "Virat"))

