
function drawCube(cube, ctx) {
    //U
    drawFace(cube[0], 210, 30, ctx);
    //L
    drawFace(cube[1], 30, 210, ctx);
    //F
    drawFace(cube[2], 210, 210, ctx);
    //R
    drawFace(cube[3], 390, 210, ctx);
    //B
    drawFace(cube[4], 570, 210, ctx);
    //D
    drawFace(cube[5], 210, 390, ctx);
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