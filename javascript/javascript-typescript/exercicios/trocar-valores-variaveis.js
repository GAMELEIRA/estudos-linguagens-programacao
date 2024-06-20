let varA = 'A' // B
let varB = 'B' // C
let varC = 'C' // A
let varAuxiliar; 

varAuxiliar = varA;
varA = varB;
varB = varC;
varC = varAuxiliar;

console.log(varA, varB, varC);