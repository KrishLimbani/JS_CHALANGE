// if-else statement
// 1)

let num = 12;
if(num > 0){
    console.log("number is positive")
}else if(num < 0){
    console.log("number is negative")
}else{
    console.log("this is zero")
}


// 2)
let Age = 22;
if (Age >= 18){
    console.log("you are eligible for voting")
}else{
    console.log("you are not eligible for voting")
}


// nested-if else statement

let a = 120;
let b = 230;
let c = 300;

if (a >= b) {
    if (a >= c) {
      console.log(`${a} is biggest number`);
    } else {
        console.log(`${c} is biggest number`);
    }
  } else {
    if (b >= c) {
        console.log(`${b} is biggest number`);
    } else {
        console.log(`${c} is biggest number`);
    }
}


// switch case statement

function weakDay(day){
switch(day){
    case 1:
        console.log(`sunday`)
        break;
    case 2:
        console.log(`monday`)
        break;
    case 3:
        console.log(`tuesday`)
        break;
    case 4:
        console.log(`wednesday`)
        break;
    case 5:
        console.log(`thursday`)
        break;
    case 6:
        console.log(`friday`)
        break;
    case 7:
        console.log(`saturday`)
        break;
    default:
        console.log(`invalid input`);
}
}

console.log(weakDay(2));


// ternary opoerator base

function evenOrOdd(num){
    return (num%2==0)?(`${num} is Even`):(`${num} is Odd`)
}

console.log(evenOrOdd(23))


// find the leap year
function findLeapYear(year){
    if(year % 4 == 0 && year % 100 != 0 || year % 400 ==0){
        console.log(`${year} is leap year`)
    }else{
        console.log(`${year} is not leap year`)
    }
}

console.log(findLeapYear(2024))