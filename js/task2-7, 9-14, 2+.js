function calculateAverage() {

// Отримання значень з полів введення
var number1 = parseFloat(document.getElementById('number1').value);
var number2 = parseFloat(document.getElementById('number2').value);
var number3 = parseFloat(document.getElementById('number3').value);

var average = (number1 + number2 + number3) / 3;

document.getElementById('result2').innerText = 'Середнє арифметичне: ' + average;

}

function calculateCylinder() {
    var radius = parseFloat(document.getElementById('radius').value);
    var height = parseFloat(document.getElementById('height').value);

    var volume = Math.PI * Math.pow(radius, 2) * height;
    var surfaceArea = 2 * Math.PI * radius * (radius + height);

    document.getElementById('volume').innerText = 'Об\'єм циліндра: ' + volume.toFixed(2);
    document.getElementById('surfaceArea').innerText = 'Площа поверхні циліндра: ' + surfaceArea.toFixed(2);
}

function calculateSumAndOddNumbers() {
    var A = parseInt(document.getElementById('numberA').value);
    var B = parseInt(document.getElementById('numberB').value);

    var sum = 0;
    var oddNumbers = '';

    for (var i = A; i <= B; i++) {
        sum += i;
        if (i % 2 !== 0) {
            oddNumbers += i + ' ';
        }
    }

    document.getElementById('sum').innerText = 'Сума чисел від ' + A + ' до ' + B + ': ' + sum;
    document.getElementById('oddNumbers').innerText = 'Непарні числа від ' + A + ' до ' + B + ': ' + oddNumbers;
}

function calculateDeliveryOptions() {
    var N = parseInt(document.getElementById('numberN').value);

    var factorial = 1;
    var i = 1;

    do {
        factorial *= i;
        i++;
    } while (i <= N);

    document.getElementById('result5').innerText = 'Кількість варіантів доставки: ' + factorial;
}
        
// Малювання прямокутника
function drawRectangle() {
    var width = 6;
    var height = 4;
    var rectangle = '';

    for (var i = 0; i < height; i++) {
        for (var j = 0; j < width; j++) {
            rectangle += '* ';
        }
        rectangle += '<br>';
    }

    document.getElementById('rectangle').innerHTML = rectangle;
}

// Малювання прямокутного трикутника
function drawRightTriangle() {
    var height = 5;
    var rightTriangle = '';

    for (var i = 0; i < height; i++) {
        for (var j = 0; j <= i; j++) {
            rightTriangle += '* ';
        }
        rightTriangle += '<br>';
    }

    document.getElementById('rightTriangle').innerHTML = rightTriangle;
}

// Малювання рівностороннього трикутника
function drawEquilateralTriangle() {
    var height = 5;
    var equilateralTriangle = '';

    for (var i = 0; i < height; i++) {
        for (var j = height - i; j > 1; j--) {
            equilateralTriangle += '&nbsp;&nbsp;';
        }
        for (var k = 0; k <= i; k++) {
            equilateralTriangle += '*&nbsp;&nbsp;';
        }
        equilateralTriangle += '<br>';
    }

    document.getElementById('equilateralTriangle').innerHTML = equilateralTriangle;
}

// Малювання ромба
function drawDiamond() {
    var height = 5;
    var diamond = '';

    for (var i = 0; i < height; i++) {
        for (var j = height - i; j > 1; j--) {
            diamond += '&nbsp;&nbsp;';
        }
        for (var k = 0; k <= i; k++) {
            diamond += '*&nbsp;&nbsp;';
        }
        diamond += '<br>';
    }

    for (var i = height - 2; i >= 0; i--) {
        for (var j = height - i; j > 1; j--) {
            diamond += '&nbsp;&nbsp;';
        }
        for (var k = 0; k <= i; k++) {
            diamond += '*&nbsp;&nbsp;';
        }
        diamond += '<br>';
    }

    document.getElementById('diamond').innerHTML = diamond;
}

function processArray() {
    var inputArray = document.getElementById('arrayInput').value.split(',').map(Number);

    var max = inputArray[0];
    var min = inputArray[0];
    var sum = 0;
    var oddValues = [];

    for (var i = 0; i < inputArray.length; i++) {
        var currentValue = inputArray[i];
        sum += currentValue;

        if (currentValue > max) {
            max = currentValue;
        }

        if (currentValue < min) {
            min = currentValue;
        }

        if (currentValue % 2 !== 0) {
            oddValues.push(currentValue);
        }
    }

    var average = sum / inputArray.length;

    document.getElementById('maxValue').innerHTML = 'Найбільше значення: ' + max;
    document.getElementById('minValue').innerHTML = 'Найменше значення: ' + min;
    document.getElementById('sum7').innerHTML = 'Загальна сума: ' + sum;
    document.getElementById('average7').innerHTML = 'Середнє арифметичне: ' + average;
    document.getElementById('oddValues').innerHTML = 'Непарні значення: ' + oddValues.join(', ');
}





function performOperation(operation) {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result;

    switch (operation) {
        case 'add':
            result = add(num1, num2);
            break;
        case 'sub':
            result = sub(num1, num2);
            break;
        case 'mul':
            result = mul(num1, num2);
            break;
        case 'div':
            result = div(num1, num2);
            break;
        default:
            result = "Невідома операція";
    }

    document.getElementById('result9').innerText = "Результат: " + result;
}

function add(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

function mul(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    if (num2 !== 0) {
        return num1 / num2;
    } else {
        return "Помилка: ділення на нуль";
    }
}


function checkNumber() {
    var number = parseInt(document.getElementById("numberInput").value);
    var result = "";

    // Визначення чи є число позитивним або від'ємним
    if (number > 0) {
        result += "Число є позитивним.\n";
    } else if (number < 0) {
        result += "Число є від'ємним.\n";
    } else {
        result += "Число дорівнює нулю.\n";
    }

    // Визначення чи є число простим
    var isPrime = true;
    if (number === 1) {
        isPrime = false;
    } else if (number > 1) {
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
    } else {
        isPrime = false;
    }

    if (isPrime) {
        result += "Число є простим.\n";
    } else {
        result += "Число не є простим.\n";
    }

    // Визначення чи ділиться число на 2, 5, 3, 6, 9 без залишку
    var divisibilityCheck = [2, 5, 3, 6, 9];
    for (var j = 0; j < divisibilityCheck.length; j++) {
        if (number % divisibilityCheck[j] === 0) {
            result += "Число ділиться на " + divisibilityCheck[j] + " без залишку.\n";
        } else {
            result += "Число не ділиться на " + divisibilityCheck[j] + " без залишку.\n";
        }
    }

    document.getElementById("result10").innerText = result;
}

function performArithmeticOperations() {
    var number1 = Number(document.getElementById("number1").value);
    var number2 = Number(document.getElementById("number2").value);
    var result = "";

    // Додавання
    var sum = number1 + number2;
    result += "Сума: " + sum + "\n";

    // Віднімання
    var difference = number1 - number2;
    result += "Різниця: " + difference + "\n";

    // Множення
    var product = number1 * number2;
    result += "Добуток: " + product + "\n";

    // Ділення
    if (number2 !== 0) {
        var quotient = number1 / number2;
        result += "Частка: " + quotient + "\n";
    } else {
        result += "Ділення на нуль неможливе.\n";
    }

    document.getElementById("result11").innerText = result;
}


function drawRectangle() {
    var width = Number(document.getElementById("width").value);
    var height = Number(document.getElementById("height").value);
    var rectangle = "";

    for (var i = 0; i < height; i++) {
        for (var j = 0; j < width; j++) {
            rectangle += "*";
        }
        rectangle += "\n";
    }

    document.getElementById("rectangle").innerText = rectangle;
}

function reverseArray() {
    var arraySize = Number(document.getElementById("arraySize").value);
    var array = [];

    for (var i = 0; i < arraySize; i++) {
        array.push(prompt("Введіть елемент масиву:"));
    }

    var reversedArray = array.reverse();
    document.getElementById("reversedArray").innerText = "Елементи масиву у зворотному порядку: " + reversedArray.join(", ");
}

function calculateAverage() {
    var number1 = parseInt(document.getElementById("number1").value);
    var number2 = parseInt(document.getElementById("number2").value);
    var number3 = parseInt(document.getElementById("number3").value);

    var average = (number1 + number2 + number3) / 3;

    document.getElementById("averageResult").innerText = "Середнє арифметичне: " + average;
}



var paragraphCount = 0;

function createParagraph() {
  if (paragraphCount < 10) {
    var paragraph = document.createElement('p');
    paragraph.innerText = 'Параграф ' + (paragraphCount + 1);
    document.getElementById('paragraphContainer').appendChild(paragraph);
    paragraphCount++;
  } else {
    clearParagraphs();
  }
}

function clearParagraphs() {
  var paragraphContainer = document.getElementById('paragraphContainer');
  while (paragraphContainer.firstChild) {
    paragraphContainer.removeChild(paragraphContainer.firstChild);
  }
  paragraphCount = 0;
}