// arithmetic operator
let num1 = 10;
let num2 = 10;
console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)
console.log(num1 % num2)

// assignment operator ((+=),(-=))
num1 += 10;
console.log(num1)
num1 -= num2
console.log(num1)

// comparison operator
let n1 = 23;
let n2 = 34;
if(n1 > n2){
    console.log(`${n1}num1 is biggest`)
}else{
    console.log(`${n2} is biggest`)
}

if(n1 < n2){
    console.log(`${n1} is biggest`)
}else{
    console.log(`${n2} is biggest`)
}

let chai = 5
let code = "5"
if(chai == code){       //this comparison operator is check olny the variable value 
    console.log(`Chai Or Code`)
}else{
    console.log(`Chai Or Biskot`)
}

if(chai === code){
    console.log(`Chai Or Code`)
}else{
    console.log(`Chai Or biskot`)
}


// logical operator
// 1) &&
// --> if the both condition is true then it will be return if part

let temp = 20
if(temp > 0 && temp <= 30){     
    console.log('the weather is good')
}else{
    console.log(`the weather is bad`)
}

// 2) ||
// --> if any one condition is true then it will be return if part 

const Temp = 100
if(Temp > 200 || Temp <= 30){
    console.log('the weather is good')
}else{
    console.log(`the weather is bad`)
}

// 3) !
// --> this operator is change true into flase and false into true

let issunny = false

if(!issunny){
    console.log("the weather id good")
}else{
    console.log("the weather is bad")
}


// ternary operator
let Chai = 5;
let Code = 50000;

let vari = (Chai < Code)?(`YES`):(`NO`)
console.log(vari)