const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

// ctx.rect(50, 50, 100, 100);
// ctx.rect(150, 150, 100, 100);
// ctx.rect(250, 250, 100, 100);
// ctx.rect(350, 350, 100, 100);
// ctx.fill();
// ctx.beginPath();
// setTimeout(() => {
//   ctx.rect(450, 450, 100, 100);
//   ctx.rect(550, 550, 100, 100);
//   ctx.fillStyle = "red";
//   ctx.fill();
// }, 1000);

ctx.moveTo(400, 400);
ctx.lineTo(500, 400);
ctx.lineTo(500, 500);
ctx.lineTo(400, 500);
ctx.lineTo(400, 400);
ctx.stroke();
