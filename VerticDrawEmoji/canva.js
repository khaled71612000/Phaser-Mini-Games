const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// ctx.beginPath();
// ctx.lineWidth = 2;
// ctx.lineJoin = "round";
// ctx.strokeStyle = "#EEEEEE";
// ctx.fillStyle = "#FF5722";
// ctx.lineCap= "round"

//ctx.moveTo(250, 1);
// ctx.lineTo(250, 1);
// ctx.rect(10, 20, 20, 20);

// ctx.fillRect(50, 50, 20, 20);

// ctx.fill();
// ctx.stroke()
// ctx.closePath();


// ctx.fillStyle = 'green';
// ctx.fillRect(10, 10, 150, 100);
// ctx.shadowColor = 'red';
// ctx.shadowBlur = 15;
// ctx.shadowOffsetY = 5;
// ctx.shadowBlur = 5;

// ctx.font = "20px arial"
// ctx.fontStyle ="orange";
// ctx.fillText("GDA 140", 100 , 100);

// ctx.beginPath();
// x , y , r , start , end = 360 , 


// ctx.fillStyle = 'yellow';
// ctx.strokeStyle = 'red';
// ctx.lineWidth = 2;
// //face
// ctx.beginPath();
// ctx.arc(100, 100, 100, 0, 2 * Math.PI);
// ctx.fill();
// ctx.stroke();
// ctx.closePath();

// ctx.fillStyle = 'red';

// //eyes
// ctx.beginPath();
// ctx.arc(30, 100, 10, 0, 1 * Math.PI);
// ctx.fill();
// ctx.stroke();
// ctx.closePath();

// ctx.beginPath();
// ctx.arc(170, 100, 10, 0, 1 * Math.PI);
// ctx.fill();
// ctx.stroke();
// ctx.closePath();

// ctx.fillStyle = 'yellow';
// ctx.strokeStyle = 'red';
// ctx.lineWidth = 2;
// smile
// ctx.beginPath();
// ctx.arc(100, 170, 25, 0, 3 * Math.PI);
// ctx.stroke();
// ctx.closePath();


// Create gradient
// var grd = ctx.createLinearGradient(100, 0, 200, 0);
// grd.addColorStop(0, "black");
// grd.addColorStop(1, "white");

// // Fill with gradient
// ctx.fillStyle = grd;
// ctx.fillRect(100, 100, 150, 80);


// var img = document.getElementById("source");
//   ctx.drawImage(img, 10, 10)



//evil smile
ctx.lineWidth = 10;
ctx.strokeStyle = "#f00";
ctx.fillStyle = "gold";

ctx.beginPath();
ctx.strokeStyle = "#f00";
ctx.fillStyle = "black";

ctx.arc(250, 250, 200, 0, Math.PI * 2, true);
ctx.stroke();
ctx.fill();

ctx.closePath();

ctx.beginPath();

ctx.strokeStyle = "#f00";
ctx.fillStyle = "red";

ctx.arc(150, 200, 50, 0, Math.PI , true);
ctx.stroke();
ctx.fill();

ctx.beginPath();


ctx.arc(350, 200, 50, 0, Math.PI , true);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(250, 300, 50, 0, Math.PI , false);
ctx.stroke();
ctx.fill();

ctx.beginPath();

ctx.strokeStyle = "#f00";
ctx.fillStyle = "black";

ctx.arc(150, 200, 20, 0, Math.PI , true);
ctx.stroke();
ctx.fill();

ctx.beginPath();


ctx.arc(350, 200, 20, 0, Math.PI , true);
ctx.stroke();
ctx.fill();
