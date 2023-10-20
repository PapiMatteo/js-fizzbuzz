// 1 RACCOLTA DATI

const rowElem  = document.querySelector(".row");
let gridString = "";

// 2 CICLO FOR 

for (i = 1; i <= 100; i++) {

    let result;
    let resultString;

    // Condizioni

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

    // Preparazione testo HTML 

    gridString += `<div class = "square ${result}">${resultString}</div>`
    
}

// 3 FINE CICLO E OUTPUT

rowElem.innerHTML = gridString;