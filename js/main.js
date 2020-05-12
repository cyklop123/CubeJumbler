$(document).ready(function () {
    let canvas = $("#pattern")[0];
    let ctx = canvas.getContext("2d");

    let cube = new Cube();
    drawCube(cube, ctx);

    $("#scrambleForm").on("submit", ()=>{
        applyScramble(cube, $("#scramble").val());
        drawCube(cube, ctx);
        $("#lastMoves").text("Last moves: " + $("#scramble").val());
        $("#scramble").val('');
        return false;
    });

    $("#scramble").on("keyup paste",(e)=>{
        let t = $("#scramble");
        t.val(t.val().replace(/[^LRUDFBlrudfb'2xyz ]/g,''));
    });

    $("#generate").on("click",()=>{
        let scramble = generateScramble(20);
        $("#scramble").val(scramble);
    });


    $("#reset").on("click", ()=>{
        cube = new Cube();
        drawCube(cube, ctx);
    });
});
