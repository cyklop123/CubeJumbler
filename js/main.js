$(document).ready(function () {
    let canvas = $("#pattern")[0];
    let ctx = canvas.getContext("2d");

    var cube = new Cube([['w','w','w'],['w','w','w'],['w','w','w']]);



    let moves = processScramble("R2 D2 U L2 R2 F2 D L2 U L2 U R2 B U' L D' L' R2 F2 L2");
    console.log(moves);

    for (let i = 0; i < moves.length; i++) {
        let prime = false;
        if (moves[i].length > 1)
            prime = true;
        switch (moves[i][0]) {
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
            default:
                console.error('Unknown move',moves[i][0], prime);
        }
    }

    drawCube(cube, ctx);
});
