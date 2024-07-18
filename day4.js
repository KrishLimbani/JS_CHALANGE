// For Loop

// 1) write a program to print 1 to 10

for(let i = 1; i<=10; i++){
    console.log(i)
}

// 2) write a program to print table of 5

let num = 5;
for(let i=1; i<=10; i++){
    console.log(`${num} * ${i} = ${num * i}`)
}


// while loop
console.log("=======> while loop")

// 1)write a program to calculate the sum of number form 1 to 10 using while loop

let sum = 0;
let i = 1;
while(i <= 10){
    sum += i;
    i++
}
console.log(`answer is ${sum}`)

// 2) write a program to print number from 10 to 1 using while loop

let a = 10;
while(a >= 1){
    console.log(a)
    a--;
}


// Do while loop

// 1) write a program to print number 1 to 5 using do while loop
console.log(" ==========> Do..while loop")
let n = 1;
do{
    console.log(n)
    n++;
}while(n <= 5)



// Nested loop
console.log("Nested loop")

for(let i=1; i <= 5; i++){

    for(let j=1; j <= i; j++){
        console.log("*");
    }
    console.log(`\n`);
}

let k = 5;
for (let i = 1; i <= k; i++) {
    let str = "* ";
    console.log(str.repeat(i));
}
