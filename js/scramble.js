
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
            case 'x':
                cube.moveX(prime);
                break;
            case 'y':
                cube.moveY(prime);
                break;
            case 'z':
                cube.moveZ(prime);
                break;
            default:
                console.error('Unknown move',moves[i], prime);
        }
        if(prime) i++; //skip prime value
    }
}

function generateScramble(n) {
    let scramble = [];
    for(let i=0; i<n; i++)
    {
        let move;
        do{
            move = randMove();
        }
        while(i>0 && planeCompare(scramble[i-1], move));
        if(Math.random()>0.66)
            move += '2';
        else if(Math.random()>0.5)
            move += "'";
        scramble.push(move);
    }
    return scramble.join(' ');
}

function randMove() {
    switch (parseInt(Math.random()*6)) {
        case 0:
            return 'U';
            break;
        case 1:
            return 'D';
            break;
        case 2:
            return 'R';
            break;
        case 3:
            return 'L';
            break;
        case 4:
            return 'F';
            break;
        case 5:
            return 'B';
            break;
        default:
            return '';
    }
}

function planeCompare(prev, act)
{
    if(plane(prev.replace(/[2']/g,'')) == plane(act.replace(/[2']/g,'')))
        return true;
    return false;
}

function plane(move)
{
    if(move == 'U' || move=='D')
        return 'x';
    if(move == 'L' || move=='R')
        return 'y';
    if(move == 'F' || move=='B')
        return 'z';
    return 'e';
}