/**
 * Link para o exercicio: https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true
 */

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    const valueMin = Math.min(...arr);
    const valueMax = Math.max(...arr);
    const total = sumNumbers(arr);
    console.log(sumMin(total, valueMax), sumMin(total, valueMin));
};

const sumNumbers = arr => arr.reduce((acc, currentValue) => acc + currentValue);

const sumMax = (total, valueMin) => total - valueMin;

const sumMin = (total, numberMax) => total - numberMax;

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
