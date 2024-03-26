document.addEventListener("DOMContentLoaded", function() { 
    // const ac = document.getElementById("AC");
    const zero = document.getElementById("0");
    const one = document.getElementById("1");
    const two = document.getElementById("2");
    const three = document.getElementById("3");
    const four = document.getElementById("4");
    const five = document.getElementById("5");
    const six = document.getElementById("6");
    const seven = document.getElementById("7");
    const eight = document.getElementById("8");
    const nine = document.getElementById("9");
    // const addition = document.getElementById("addition");
    // const subtraction = document.getElementById("subtraction");
    // const multiplication = document.getElementById("multiplication");
    // const division = document.getElementById("division");
    // const equal = document.getElementById("equal");
    // const decimal = document.getElementById("decimal");

    let display = document.getElementById("display");
    let result = "0";
    let operator = "";
    const max = 15;

    document.getElementById("clear").addEventListener("click", function() {
        console.log("clear")
        clear()
    });

    // Numbers

    document.getElementById("1").addEventListener("click", function() {
        if  (result == "0"){
            result = "1"
        } else if (result.length >= max) {
            alert("number to large")
        } else {
            result += "1";
        }
        update()
    });
    document.getElementById("2").addEventListener("click", function() {
        if  (result == "0"){
            result = "2"
        } else if (result.length >= max) {
            alert("number to large")
        } else {
            result += "2"
        }
        update()
    });
    document.getElementById("3").addEventListener("click", function() {
        if  (result == "0"){
            result = "3"
        } else if (result.length >= max) {
            alert("number to large")
        } else {
            result += "3"
        }
        update()
    });
    document.getElementById("4").addEventListener("click", function() {
        if  (result == "0"){
            result = "4"
        } else if (result.length >= max) {
            alert("number to large")
        } else {
            result += "4"
        }
        update()
    });
    document.getElementById("5").addEventListener("click", function() {
        if  (result == "0"){
            result = "5"
        } else if (result.length >= max) {
            alert("number to large")
        } else {
            result += "5"
        }
        update()
    });
    document.getElementById("6").addEventListener("click", function() {
        if  (result == "0"){
            result = "6"
        } else if (result.length >= max) {
            alert("number to large")
        } else {
            result += "6"
        }
        update()
    });
    document.getElementById("7").addEventListener("click", function() {
        if  (result == "0"){
            result = "7"
        } else if (result.length >= max) {
            alert("number to large")
        } else {
            result += "7"
        }
        update()
    });
    document.getElementById("8").addEventListener("click", function() {
        if  (result == "0"){
            result = "8"
        } else if (result.length >= max) {
            alert("number to large")
        } else {
            result += "8"
        }
        update()
    });
    document.getElementById("9").addEventListener("click", function() {
        if  (result == "0"){
            result = "9"
        } else if (result.length >= max) {
            alert("number to large")
        } else {
            result += "9"
        }
        update()
    });
    document.getElementById("0").addEventListener("click", function() {
        if  (result == "0"){
            result = "0"
        } else if (result.length >= max) {
            alert("number to large")
        } else {
            result += "0"
        }
        update()
    });
    document.getElementById("decimal").addEventListener("click", function() {
        let lastWordIndex = result.lastIndexOf(" ");
        let lastWord = result.substring(lastWordIndex + 1);
        if (lastWord.includes(".")) {
            alert("Decimal already in place");
        } else if (result.length >= max) {
            alert("Number too large");
        } else {
            result += ".";
        }
        update();
    });
    
    




    // Operators

    document.getElementById("addition").addEventListener("click", function() {
        console.log("+")
        if  (result == "0"){
            result = "0"
        } else if (operator.length >= 3) {
            alert("you may only use one operator at a time")
        } else {
            operator = " + ";
            result += operator;
        }
        update()
    });
    document.getElementById("subtraction").addEventListener("click", function() {
        console.log("-")
        if  (result == "0"){
            result = "0"
        } else if (operator.length >= 3) {
            alert("you may only use one operator at a time")
        } else {
            operator = " - ";
            result += operator;
        }
        update()
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        console.log("*")
        if  (result == "0"){
            result = "0"
        } else if (operator.length >= 3) {
            alert("you may only use one operator at a time")
        } else {
            operator = " * ";
            result += operator;
        }
        update()
    });

    document.getElementById("division").addEventListener("click", function() {
        console.log("/")
        if  (result == "0"){
            result = "0"
        } else if (operator.length >= 3) {
            alert("you may only use one operator at a time")
        } else {
            operator = " / ";
            result += operator;
        }
        update()
    });




    // Equals
    document.getElementById("equal").addEventListener("click", function(){
        // Split the result string into operands and operators
        let tokens = result.split(/([+\-*\/])/).filter(Boolean);
    
        // Perform multiplication and division first
        for (let i = 1; i < tokens.length; i += 2) {
            if (tokens[i] === '*' || tokens[i] === '/') {
                let operand1Index = i - 1;
                let operand2Index = i + 1;
    
                let operator = tokens[i];
                let operand1 = parseFloat(tokens[operand1Index]);
                let operand2 = parseFloat(tokens[operand2Index]);
    
                // Perform the operation based on the operator
                let result;
                switch(operator) {
                    case '*':
                        result = operand1 * operand2;
                        break;
                    case '/':
                        if (operand2 !== 0) {
                            result = operand1 / operand2;
                        } else {
                            alert("Division by zero is not allowed");
                            return; // Exit the function if division by zero is attempted
                        }
                        break;
                }
    
                // Replace the operands and operator with the result
                tokens.splice(operand1Index, 3, result.toString());
                i -= 2; // Adjust the index to account for the removed tokens
            }
        }
    
        // Perform addition and subtraction
        let total = parseFloat(tokens[0]);
        for (let i = 1; i < tokens.length; i += 2) {
            let operator = tokens[i];
            let operand = parseFloat(tokens[i + 1]);
    
            // Perform the operation based on the operator
            switch(operator) {
                case '+':
                    total += operand;
                    break;
                case '-':
                    total -= operand;
                    break;
            }
        }
    
        // Update the result with the computed total
        result = total.toString();
        update();
    });
    
    
    















    function update() {
        operator = "";
        display.innerText = result;
    }

    function clear() {
        result = "0"
        display.innerText = result;
    }
    
    clear()
})