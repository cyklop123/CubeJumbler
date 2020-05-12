$(document).ready(function () {
    let canvas = $("#pattern")[0];
    let ctx = canvas.getContext("2d");

    let cube = new Cube();
    drawCube(cube, ctx);

    $("#scrambleForm").submit(()=>{
        applyScramble(cube, $("#scramble").val());
        drawCube(cube, ctx);
        $("#scramble").val('');
        return false;
    });

    $("#scramble").on("keyup paste",()=>{
        let t = $("#scramble");
        t.val(t.val().replace(/[^LRUDFBlrudfb'2 ]/g,''));
    });

    $("#reset").click(()=>{
        console.log("a");
        cube = new Cube();
        drawCube(cube, ctx);
    });
});
