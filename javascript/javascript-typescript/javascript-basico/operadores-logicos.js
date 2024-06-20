/**
 * Operadores lógicos
 * && -> AND -> E
 * || -> OR -> OU
 * ! -> NOT -> NAO
 */

const estaChovendo = true;
const maeMorreu = true;
const namoradaTerminou = true;

console.log(estaChovendo && namoradaTerminou);
console.log(maeMorreu || namoradaTerminou);
console.log(!(estaChovendo && maeMorreu));
