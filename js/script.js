const rowElem  = document.querySelector(".row");
let gridString = "";

for (i = 1; i <= 100; i++) {

    let result;
    let resultString;

    if (i % 3 === 0 && i % 5 === 0) {
        result = "fizz-buzz"
        resultString = "FizzBuzz"
    } else if (i % 5 === 0) {
        result = "buzz"
        resultString = "Buzz"
    } else if(i % 3 === 0) {
        result = "fizz"
        resultString = "Fizz"
    } else {
        result = "normal"
        resultString = i
    }
    console.log(i, result, resultString)

    gridString += `<div class = "square ${result}">${resultString}</div>`
    
}

rowElem.innerHTML = gridString;