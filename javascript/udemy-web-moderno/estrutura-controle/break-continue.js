//UTILIZADO PARA DESVIAR O FLUXO DE UMA ESTRUTURA DE CONTROLE

const notas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i in notas) { 
    if (i == 7) {
        break; //ENCERRA E PULA PRO PROXIMO BLOCO
    } else if (i == 6) {
        console.log('Aprendendo mais');
        continue; //ENCERRA MAS CONTINUA A REPETICAO
    }
    console.log(notas[i]);
}
