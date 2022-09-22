
const operatorReg = new RegExp(/(\/|\*)/g);
const positReg = new RegExp(/(\-|\+)/);

function calculation(str) {
    let stripped = str.replaceAll(" ", "");
    let numbers = [];
    let operators = [];

    let newNumber = ""; 
    for (let i = 0; i < stripped.length; i++) {
        let chr = stripped[i];

        if (operatorReg.test(chr)) {
            operators.push(chr);

            numbers.push(+(newNumber.replace(",", ".")));
            newNumber = "";
        }
        else {
            newNumber += chr;
        }
    }
    numbers.push(+(newNumber.replace(",", ".")));

    let result = numbers[0];
    let newNumbers = [];
    let newOperators = [];

    for (let i = 0; i < operators.length; i++) {
        let operator = operators[i];
        let num = numbers[i];
        let numNext = numbers[i+1];

        if (operator == "*") {
            newNumbers.push(num * numNext);
        }
        else if (operator == "/") {
            newNumbers.push(num / numNext);
        }
        else {
            newNumbers.push(num);
            newOperators.push(operator);
        }
    }

    console.log(newNumbers);
    console.log(newOperators);
    return;
    for (let i = 0; i < operators.length; i++) {
        let operator = operators[i];
        let numNext = numbers[i+1];
        
        switch (operator) {
            case "+":
                result += numNext;
                break;
            case "-":
                result -= numNext;
                break;
        }
    }

    console.log(`${str} = ${result}`);
}

calculation("3 + 5 - 7 * 3 + 1"); // -12