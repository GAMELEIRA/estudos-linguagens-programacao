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


phrase(4);