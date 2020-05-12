"use strict"

class Cube
{
    constructor(U,L,F,R,B,D) {
        if(U===undefined) U = [['w','w','w'],['w','w','w'],['w','w','w']];
        if(L===undefined) L = [['o','o','o'],['o','o','o'],['o','o','o']];
        if(F===undefined) F = [['g','g','g'],['g','g','g'],['g','g','g']];
        if(R===undefined) R = [['r','r','r'],['r','r','r'],['r','r','r']];
        if(B===undefined) B = [['b','b','b'],['b','b','b'],['b','b','b']];
        if(D===undefined) D = [['y','y','y'],['y','y','y'],['y','y','y']];
        this.U = U; this.L = L; this.F = F; this.R = R; this.B = B; this.D = D;
    }

    //one face moves
    turnFace(face)
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

    moveR(prime)
    {
        this.turnFace(this.R);
        var temp1 = this.U[0][2];
        var temp2 = this.U[1][2];
        var temp3 = this.U[2][2];

        this.U[0][2] = this.F[0][2];
        this.U[1][2] = this.F[1][2];
        this.U[2][2] = this.F[2][2];

        this.F[0][2] = this.D[0][2];
        this.F[1][2] = this.D[1][2];
        this.F[2][2] = this.D[2][2];

        this.D[0][2] = this.B[2][0];
        this.D[1][2] = this.B[1][0];
        this.D[2][2] = this.B[0][0];

        this.B[2][0] = temp1;
        this.B[1][0] = temp2;
        this.B[0][0] = temp3;

        if(prime)
        {
            this.moveR(false);
            this.moveR(false);
        }

    }

    moveL(prime)
    {
        this.turnFace(this.L);
        this.turnFace(this.L);
        this.turnFace(this.L);
        var temp1 = this.U[0][0];
        var temp2 = this.U[1][0];
        var temp3 = this.U[2][0];

        this.U[0][0] = this.F[0][0];
        this.U[1][0] = this.F[1][0];
        this.U[2][0] = this.F[2][0];

        this.F[0][0] = this.D[0][0];
        this.F[1][0] = this.D[1][0];
        this.F[2][0] = this.D[2][0];

        this.D[0][0] = this.B[2][2];
        this.D[1][0] = this.B[1][2];
        this.D[2][0] = this.B[0][2];

        this.B[2][2] = temp1;
        this.B[1][2] = temp2;
        this.B[0][2] = temp3;

        if(!prime)
        {
            this.moveL(true);
            this.moveL(true);
        }

    }

    moveU(prime)
    {
        this.turnFace(this.U);
        var temp1 = this.F[0][0];
        var temp2 = this.F[0][1];
        var temp3 = this.F[0][2];

        this.F[0][0] = this.R[0][0];
        this.F[0][1] = this.R[0][1];
        this.F[0][2] = this.R[0][2];

        this.R[0][0] = this.B[0][0];
        this.R[0][1] = this.B[0][1];
        this.R[0][2] = this.B[0][2];

        this.B[0][0] = this.L[0][0];
        this.B[0][1] = this.L[0][1];
        this.B[0][2] = this.L[0][2];

        this.L[0][0] = temp1;
        this.L[0][1] = temp2;
        this.L[0][2] = temp3;

        if(prime)
        {
            this.moveU(false);
            this.moveU(false);
        }

    }

    moveD(prime)
    {
        this.turnFace(this.D);
        var temp1 = this.F[2][0];
        var temp2 = this.F[2][1];
        var temp3 = this.F[2][2];

        this.F[2][0] = this.L[2][0];
        this.F[2][1] = this.L[2][1];
        this.F[2][2] = this.L[2][2];

        this.L[2][0] = this.B[2][0];
        this.L[2][1] = this.B[2][1];
        this.L[2][2] = this.B[2][2];

        this.B[2][0] = this.R[2][0];
        this.B[2][1] = this.R[2][1];
        this.B[2][2] = this.R[2][2];

        this.R[2][0] = temp1;
        this.R[2][1] = temp2;
        this.R[2][2] = temp3;
        if(prime)
        {
            this.moveD( false);
            this.moveD( false);
        }
    }

    moveF(prime)
    {
        this.turnFace(this.F);
        var temp1 = this.U[2][0];
        var temp2 = this.U[2][1];
        var temp3 = this.U[2][2];

        this.U[2][0] = this.L[2][2];
        this.U[2][1] = this.L[1][2];
        this.U[2][2] = this.L[0][2];

        this.L[0][2] = this.D[0][0];
        this.L[1][2] = this.D[0][1];
        this.L[2][2] = this.D[0][2];

        this.D[0][0] = this.R[2][0];
        this.D[0][1] = this.R[1][0];
        this.D[0][2] = this.R[0][0];

        this.R[0][0] = temp1;
        this.R[1][0] = temp2;
        this.R[2][0] = temp3;

        if(prime)
        {
            this.moveF(false);
            this.moveF(false);
        }
    }

    moveB(prime)
    {
        this.turnFace(this.B);
        var temp1 = this.U[0][0];
        var temp2 = this.U[0][1];
        var temp3 = this.U[0][2];

        this.U[0][0] = this.R[0][2];
        this.U[0][1] = this.R[1][2];
        this.U[0][2] = this.R[2][2];

        this.R[0][2] = this.D[2][2];
        this.R[1][2] = this.D[2][1];
        this.R[2][2] = this.D[2][0];

        this.D[2][0] = this.L[0][0];
        this.D[2][1] = this.L[1][0];
        this.D[2][2] = this.L[2][0];

        this.L[0][0] = temp3;
        this.L[1][0] = temp2;
        this.L[2][0] = temp1;

        if(prime)
        {
            this.moveB( false);
            this.moveB( false);
        }
    }

    //rotations
    moveX(prime)
    {
        this.turnFace(this.R);

        this.turnFace(this.L);
        this.turnFace(this.L);
        this.turnFace(this.L);

        let temp = this.U;
        this.U = this.F;
        this.F = this.D;
        this.turnFace(this.B);
        this.turnFace(this.B);
        this.D = this.B;
        this.turnFace(temp);
        this.turnFace(temp);
        this.B = temp;
        if(prime)
        {
            this.moveX(0);
            this.moveX(0);
        }
    }

    moveY(prime) {
        this.turnFace(this.U);

        this.turnFace(this.D);
        this.turnFace(this.D);
        this.turnFace(this.D);

        let temp = this.F;
        this.F = this.R;
        this.R = this.B;
        this.B = this.L;
        this.L = temp;
        if (prime) {
            this.moveY(0);
            this.moveY(0);
        }
    }

    moveZ(prime)
    {
        this.turnFace(this.F);

        this.turnFace(this.B);
        this.turnFace(this.B);
        this.turnFace(this.B);

        let temp = this.U;
        this.turnFace(this.L);
        this.U = this.L;
        this.turnFace(this.D);
        this.L = this.D;
        this.turnFace(this.R);
        this.D = this.R;
        this.turnFace(temp);
        this.R = temp;
        if(prime)
        {
            this.moveZ(0);
            this.moveZ(0);
        }
    }

    //small letter moves
    mover(prime)
    {
        this.moveX(0);
        this.moveL(0);
        if(prime)
        {
            this.mover(0);
            this.mover(0);
        }
    }

    movel(prime)
    {
        this.moveX(1);
        this.moveR(0);
        if(prime)
        {
            this.movel(0);
            this.movel(0);
        }
    }

    moveu(prime)
    {
        this.moveY(0);
        this.moveD(0);
        if(prime)
        {
            this.moveu(0);
            this.moveu(0);
        }
    }

    moved(prime)
    {
        this.moveY(1);
        this.moveU(0);
        if(prime)
        {
            this.moved(0);
            this.moved(0);
        }
    }

    moveb(prime)
    {
        this.moveZ(1);
        this.moveF(0);
        if(prime)
        {
            this.moveb(0);
            this.moveb(0);
        }
    }

    movef(prime)
    {
        this.moveZ(0);
        this.moveB(0);
        if(prime)
        {
            this.movef(0);
            this.movef(0);
        }
    }
}