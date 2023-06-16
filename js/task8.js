function generateMatrix() {
    var matrix = [];

    for (var i = 0; i < 5; i++) {
        matrix[i] = [];
        for (var j = 0; j < 5; j++) {
            matrix[i][j] = getRandomNumber();
        }
    }

    return matrix;
}

function getRandomNumber() {
    var randomNumber = Math.floor(Math.random() * 21) - 10;
    return randomNumber;
}

function replaceDiagonalValues() {
    var matrix = generateMatrix();

    for (var i = 0; i < 5; i++) {
        if (matrix[i][i] > 0) {
            matrix[i][i] = 1;
        } else if (matrix[i][i] < 0) {
            matrix[i][i] = 0;
        }
    }

    return matrix;
}

var resultMatrix = replaceDiagonalValues();

// Виведення результату на екран
var output = '';
for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
        output += '<input type="text" class="matrix-element" value="' + resultMatrix[i][j] + '" readonly>';
    }
    output += '<br>';
}

document.getElementById('matrixOutput').innerHTML = output;