function addNumbers(num1,num2){
    return num1+num2;
}

let num1=3;
let num2=6;
console.log(addNumbers(num1,num2));

//or
console.log(addNumbers(3,6));




function findMax(x,y){
    if (x==y)
    console.log("Both are equal")
    if(x>y){
        return x;
    }
    else return y;

}



function compute(num1,num2, operation){
    function add() {
        return num1 + num2;
    }

    function subtract() {
        return num1 - num2;
    }

    function multiply() {
        return num1 * num2;
    }

    function divide() {
        if (num2 !== 0) {
            return num1 / num2;
        } else {
            return "Cannot divide by zero!";
        }
    }

    let result;

    switch (operation) {
        case 'add':
            result = add();
            break;
        case 'subtract':
            result = subtract();
            break;
        case 'multiply':
            result = multiply();
            break;
        case 'divide':
            result = divide();
            break;
        default:
            result = "Invalid operation";
    }

    return result;
}


//step2

globalVar=5;
const squareNumber = number => number * number;
console.log(squareNumber(globalVar));


const squareNumber = number => number * number;{

localVar=5;

};
console.log(squareNumber(localVar)) //error

//step3
for(let i=0 ; i<=1 ; i++){
    console.log(i) ;
}

let i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}


(let i = 1;

do {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
} while (i <= 10);
)

const y = ['apple', 'banana', 'mango', 'kiwi', 'berries', 'orange'];

let index = 0;
while (index < y.length) {
    const fruit = y[index];
    if (fruit.length > 5) {
        console.log(fruit);
    }
    index++;
}


function processArray(array, add) {
    for (const element of array) {
        add(element);
    }
}

function multiplier(number){
    function divider(number1){
        return number*number1 ;
    }
}