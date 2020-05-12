
function processScramble(scramble) {
    scramble = scramble.replace(/ /g,'');
    let moves = "";
    for(let i=0; i<scramble.length; ++i)
    {
        if(scramble[i] == '2')
        {
            moves += scramble[i-1];
        }
        else
        {
            moves += scramble[i];
        }
    }
    return moves;
}

function applyScramble(cube, scramble) {
    let moves = processScramble(scramble);

    for (let i = 0; i < moves.length; i++) {
        let prime = false;
        if (i < moves.length && moves[i+1] == "'") {
            prime = true;
        }
        switch (moves[i]) {
            case 'R':
                cube.moveR(prime);
                break;
            case 'L':
                cube.moveL(prime);
                break;
            case 'U':
                cube.moveU(prime);
                break;
            case 'D':
                cube.moveD(prime);
                break;
            case 'F':
                cube.moveF(prime);
                break;
            case 'B':
                cube.moveB(prime);
                break;
            case 'r':
                cube.mover(prime);
                break;
            case 'l':
                cube.movel(prime);
                break;
            case 'u':
                cube.moveu(prime);
                break;
            case 'd':
                cube.moved(prime);
                break;
            case 'f':
                cube.movef(prime);
                break;
            case 'b':
                cube.moveb(prime);
                break;
            default:
                console.error('Unknown move',moves[i][0], prime);
        }
        if(prime) i++; //skip prime value
    }
}