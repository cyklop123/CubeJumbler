$(document).ready(function () {
    let canvas = $("#pattern")[0];
    let ctx = canvas.getContext("2d");

    let cube = [
    [['w','w','w'],['w','w','w'],['w','w','w']],
    [['o','o','o'],['o','o','o'],['o','o','o']],
    [['g','g','g'],['g','g','g'],['g','g','g']],
    [['r','r','r'],['r','r','r'],['r','r','r']],
    [['b','b','b'],['b','b','b'],['b','b','b']],
    [['y','y','y'],['y','y','y'],['y','y','y']]
    ];
    drawCube(cube, ctx);

    $("#scrambleForm").on('submit',function(event) {
        event.preventDefault();
        cube = [
            [['w','w','w'],['w','w','w'],['w','w','w']],
            [['o','o','o'],['o','o','o'],['o','o','o']],
            [['g','g','g'],['g','g','g'],['g','g','g']],
            [['r','r','r'],['r','r','r'],['r','r','r']],
            [['b','b','b'],['b','b','b'],['b','b','b']],
            [['y','y','y'],['y','y','y'],['y','y','y']]
        ];

        let moves = processScramble($("#scramble").val());

        for (let i = 0; i < moves.length; i++) {
            let prime = false;
            if (moves[i].length > 1)
                prime = true;
            switch (moves[i][0]) {
                case 'R':
                    moveR(cube, prime);
                    break;
                case 'L':
                    moveL(cube, prime);
                    break;
                case 'U':
                    moveU(cube, prime);
                    break;
                case 'D':
                    moveD(cube, prime);
                    break;
                case 'F':
                    moveF(cube, prime);
                    break;
                case 'B':
                    moveB(cube, prime);
                    break;
            }
        }

        drawCube(cube, ctx);
    });
});
