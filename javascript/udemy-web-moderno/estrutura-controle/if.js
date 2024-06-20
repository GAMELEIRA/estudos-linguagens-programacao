const soBoaNoticia = (nota) => {
    if (nota >= 7) {
        console.log('Aprovado com ' + nota);
    }
}

soBoaNoticia(8.1);
soBoaNoticia(6.1);

const seForVerdadeiroEuFalo = (valor) => {
    if (valor) {
        console.log('É verdade... ' + valor);
    } else {
        console.log('Deu errado meu parcero');
    }
}

//FALSO PRO JAVASCRIPT
seForVerdadeiroEuFalo();
seForVerdadeiroEuFalo(null);
seForVerdadeiroEuFalo(undefined);
seForVerdadeiroEuFalo(NaN);
seForVerdadeiroEuFalo('');
seForVerdadeiroEuFalo(0);

//VERDADEIRO PRO JAVASCRIPT
seForVerdadeiroEuFalo(-1);
seForVerdadeiroEuFalo(null);
seForVerdadeiroEuFalo(' ');
seForVerdadeiroEuFalo(' ');
seForVerdadeiroEuFalo(' ');
seForVerdadeiroEuFalo(' ');
seForVerdadeiroEuFalo(' ');
seForVerdadeiroEuFalo([]);
seForVerdadeiroEuFalo([1, 2]);
seForVerdadeiroEuFalo({});