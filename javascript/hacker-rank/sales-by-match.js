/**
 * Link para o exercicio: https://www.hackerrank.com/challenges/sock-merchant/problem?isFullScreen=true&h_r=next-challenge&h_v=zen
 */

'use strict';

const fs = require('fs');

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
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar = []) {
    
    let pares = 0;

    for (let i = 0; i < n; i++) {
        for (let c = 1; c < ar.length; c++) {
            if (i !== c && ar[i] === ar[c] && ar[i] !== undefined) {
                pares++;
                delete ar[i];
                delete ar[c];
            }
        }
    }
    return pares;
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = sockMerchant(n, ar);

    ws.write(result + '\n');

    ws.end();
}
