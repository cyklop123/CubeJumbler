
function drawCube(cube, ctx) {
    drawFace(cube.U, 210, 30, ctx);
    drawFace(cube.L, 30, 210, ctx);
    drawFace(cube.F, 210, 210, ctx);
    drawFace(cube.R, 390, 210, ctx);
    drawFace(cube.B, 570, 210, ctx);
    drawFace(cube.D, 210, 390, ctx);
}

function drawFace(face, x, y, ctx) {
    for(var i=0; i<face.length; i++)
    {
        for(var j=0; j<face[i].length; j++)
        {
            drawRect(face[i][j], x+j*60, y+i*60, ctx);
        }
    }
}

function drawRect(color, x, y, ctx) {
    switch (color) {
        case "r":
            ctx.fillStyle = "#ff0000";
            break;
        case "g":
            ctx.fillStyle = "#00ff00";
            break;
        case "b":
            ctx.fillStyle = "#0000ff";
            break;
        case "y":
            ctx.fillStyle = "#ffff00";
            break;
        case "w":
            ctx.fillStyle = "#ffffff";
            break;
        case "o":
            ctx.fillStyle = "#ffa500";
            break;
        default:
            ctx.fillStyle = "#000000";
    }
    ctx.fillRect(x, y, 60, 60);
    ctx.strokeStyle = "#000000";
    ctx.strokeRect(x, y, 60, 60);
}