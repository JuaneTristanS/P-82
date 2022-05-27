var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.strokeStyle="grey";
ctx.lineWidth = 4;
ctx.rect(150,143,500,300);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth = 6;
ctx.arc(270, 220, 50, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth = 6;
ctx.arc(385, 220, 50, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth = 6;
ctx.arc(500, 220, 50, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth = 6;
ctx.arc(325, 270, 50, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth = 6;
ctx.arc(440, 270, 50, 0, 2 * Math.PI);
ctx.stroke();
