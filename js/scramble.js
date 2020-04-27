
function processScramble(scramble) {
    let moves = scramble.split(' ');
    for(let i=moves.length-1; i>=0; --i)
    {
        if(moves[i].length == 2 )
        {
            if(moves[i][1] != "'") {
                moves[i] = moves[i].substr(0, 1);
                moves.splice(i, 0, moves[i]);
            }
        }
    }
    return moves;
}