function moveR(cube, prime)
{
    turnFace(cube[3]);
    var temp1 = cube[0][0][2];
    var temp2 = cube[0][1][2];
    var temp3 = cube[0][2][2];

    cube[0][0][2] = cube[2][0][2];
    cube[0][1][2] = cube[2][1][2];
    cube[0][2][2] = cube[2][2][2];

    cube[2][0][2] = cube[5][0][2];
    cube[2][1][2] = cube[5][1][2];
    cube[2][2][2] = cube[5][2][2];

    cube[5][0][2] = cube[4][2][0];
    cube[5][1][2] = cube[4][1][0];
    cube[5][2][2] = cube[4][0][0];

    cube[4][2][0] = temp1;
    cube[4][1][0] = temp2;
    cube[4][0][0] = temp3;

    if(prime)
    {
        moveR(cube,false);
        moveR(cube,false);
    }

}

function moveL(cube, prime)
{
    turnFace(cube[1]);
    turnFace(cube[1]);
    turnFace(cube[1]);
    var temp1 = cube[0][0][0];
    var temp2 = cube[0][1][0];
    var temp3 = cube[0][2][0];

    cube[0][0][0] = cube[2][0][0];
    cube[0][1][0] = cube[2][1][0];
    cube[0][2][0] = cube[2][2][0];

    cube[2][0][0] = cube[5][0][0];
    cube[2][1][0] = cube[5][1][0];
    cube[2][2][0] = cube[5][2][0];

    cube[5][0][0] = cube[4][2][2];
    cube[5][1][0] = cube[4][1][2];
    cube[5][2][0] = cube[4][0][2];

    cube[4][2][2] = temp1;
    cube[4][1][2] = temp2;
    cube[4][0][2] = temp3;

    if(!prime)
    {
        moveL(cube,true);
        moveL(cube,true);
    }

}

function moveU(cube, prime)
{
    turnFace(cube[0]);
    var temp1 = cube[2][0][0];
    var temp2 = cube[2][0][1];
    var temp3 = cube[2][0][2];

    cube[2][0][0] = cube[3][0][0];
    cube[2][0][1] = cube[3][0][1];
    cube[2][0][2] = cube[3][0][2];

    cube[3][0][0] = cube[4][0][0];
    cube[3][0][1] = cube[4][0][1];
    cube[3][0][2] = cube[4][0][2];

    cube[4][0][0] = cube[1][0][0];
    cube[4][0][1] = cube[1][0][1];
    cube[4][0][2] = cube[1][0][2];

    cube[1][0][0] = temp1;
    cube[1][0][1] = temp2;
    cube[1][0][2] = temp3;

    if(prime)
    {
        moveU(cube,false);
        moveU(cube,false);
    }

}

function moveD(cube, prime) {
    turnFace(cube[5]);
    var temp1 = cube[2][2][0];
    var temp2 = cube[2][2][1];
    var temp3 = cube[2][2][2];

    cube[2][2][0] = cube[1][2][0];
    cube[2][2][1] = cube[1][2][1];
    cube[2][2][2] = cube[1][2][2];

    cube[1][2][0] = cube[4][2][0];
    cube[1][2][1] = cube[4][2][1];
    cube[1][2][2] = cube[4][2][2];

    cube[4][2][0] = cube[3][2][0];
    cube[4][2][1] = cube[3][2][1];
    cube[4][2][2] = cube[3][2][2];

    cube[3][2][0] = temp1;
    cube[3][2][1] = temp2;
    cube[3][2][2] = temp3;
    if(prime)
    {
        moveD(cube, false);
        moveD(cube, false);
    }
}

function moveF(cube, prime) {
    turnFace(cube[2]);
    var temp1 = cube[0][2][0];
    var temp2 = cube[0][2][1];
    var temp3 = cube[0][2][2];

    cube[0][2][0] = cube[1][2][2];
    cube[0][2][1] = cube[1][1][2];
    cube[0][2][2] = cube[1][0][2];

    cube[1][0][2] = cube[5][0][0];
    cube[1][1][2] = cube[5][0][1];
    cube[1][2][2] = cube[5][0][2];

    cube[5][0][0] = cube[3][2][0];
    cube[5][0][1] = cube[3][1][0];
    cube[5][0][2] = cube[3][0][0];

    cube[3][0][0] = temp1;
    cube[3][1][0] = temp2;
    cube[3][2][0] = temp3;

    if(prime)
    {
        moveF(cube,false);
        moveF(cube,false);
    }
}

function moveB(cube, prime) {
    turnFace(cube[4]);
    var temp1 = cube[0][0][0];
    var temp2 = cube[0][0][1];
    var temp3 = cube[0][0][2];

    cube[0][0][0] = cube[3][0][2];
    cube[0][0][1] = cube[3][1][2];
    cube[0][0][2] = cube[3][2][2];

    cube[3][0][2] = cube[5][2][2];
    cube[3][1][2] = cube[5][2][1];
    cube[3][2][2] = cube[5][2][0];

    cube[5][2][0] = cube[1][0][0];
    cube[5][2][1] = cube[1][1][0];
    cube[5][2][2] = cube[1][2][0];

    cube[1][0][0] = temp3;
    cube[1][1][0] = temp2;
    cube[1][2][0] = temp1;

    if(prime)
    {
        moveB(cube, false);
        moveB(cube, false);
    }
}

function turnFace(face)
{
    //X - faces
    var temp = face[0][0];
    face[0][0] = face[2][0];
    face[2][0] = face[2][2];
    face[2][2] = face[0][2];
    face[0][2] = temp;
    //+ - faces
    temp = face[0][1];
    face[0][1] = face[1][0];
    face[1][0] = face[2][1];
    face[2][1] = face[1][2];
    face[1][2] = temp;
}