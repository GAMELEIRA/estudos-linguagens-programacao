/**
 * Link para o exercicio: https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=true
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
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n = []) {
    
    phrase(n);
    
}

const phrase = (n) => {
    for (let l = 1; l <= n; l++) { 
        console.log(factorySpaces(n - l).concat(factoryOldGame(l)));        
    }
}

const factorySpaces = (quantSpaces) => {
    let spaces = '';
    for (let i = 0; i < quantSpaces; i++) {
        spaces += ' ';
    }
    return spaces;
}

const factoryOldGame = (quantOldGame) => {
    let oldGame = '';
    for (let i = 0; i < quantOldGame; i++) {
        oldGame += '#';
    }
    return oldGame;
}

const factoryArray = (indices) => new Array(indices);

function main() {
    const n = parseInt(readLine().trim(), 10);

    staircase(n);
}
