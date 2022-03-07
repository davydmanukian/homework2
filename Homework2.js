// 1) For a given number calculate the sum of its digits
let number = +prompt("number")
let sumOfNumber = 0
while (number) {
    sumOfNumber = sumOfNumber + number % 10 
    number = ((number - (number % 10)) / 10);
}
console.log(sumOfNumber);

// 2) Is the triangle valid?
let side1 = +prompt("first side")
let side2 = +prompt("second side")
let side3 = +prompt("third side")
if(side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1){
  console.log ("yes")
} else{
  console.log("no")
}

// 3 Given a number prints its digits counts
let number = +prompt("number")
let digitsOfNumber = 0
if (number === 0){
  digitsOfNumber = digitsOfNumber + 1
} else{
   while(number){ 
  digitsOfNumber = digitsOfNumber + 1
  number = ((number - (number % 10)) / 10)
  }
}
console.log(digitsOfNumber);


// 4) Count numbers of digit 9 in a number
let number = +prompt("number")
let number9 = 0
while (number) {
 if (number % 10 == 9 || number % 10 == -9 ) {
   number9 = number9 + 1
 } 
    number = ((number - (number % 10)) / 10);
}
console.log(number9);

// 5) print number in reverse order
let number = +prompt("number")
let newNumber = 0;
while (number) {
    newNumber = newNumber * 10;
    newNumber = newNumber + number % 10;
    number = ((number - (number % 10)) / 10);
}
 console.log(newNumber);

