const canvas = document.getElementById("drawingCanvas");
const ctx = canvas.getContext("2d");
let painting = false;

canvas.addEventListener("mousedown", () => {
    painting = true;
});

canvas.addEventListener("mouseup", () => {
    painting = false;
    ctx.beginPath();
});

canvas.addEventListener("mousemove", draw);

function draw(e) {
    if (!painting) return;

    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.strokeStyle = "black";

    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}

