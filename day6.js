// Array

const arr = [1,2,3,4,5]
console.log(arr)
console.log(arr[0])
console.log(arr[4])

arr.push(6)
arr.pop()
arr.shift()
arr.unshift(1)
console.log(arr)

// use a for loop to print each element of an Array

let each = [1,2,3,4,5,6,7,8,9,10]

console.log("USING FOR LOOP")

for(let i = 0; i <= each.length; i++){
    console.log(each[i])
}

// use for each loop to print each element of an Array

each.forEach(function(element) {
    console.log(element)
});


