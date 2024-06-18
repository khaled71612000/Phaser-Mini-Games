const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
var isX = true;
var activeCell ;
var mouseX ;
var mouseY ;
ctx.canvas.addEventListener('mousemove' , function(event){
    mouseX = event.clientX - ctx.canvas.offsetLeft;
    mouseY = event.clientY - ctx.canvas.offsetTop;
    var temp = document.getElementById("mousePos");
    getCell(mouseX , mouseY);
    temp.innerHTML = mouseX + "|" + mouseY + "  Active Cell  : " + activeCell ;
});

drawXOBox();

ctx.canvas.addEventListener('click' , () => {
    if(isX){
        drawX(activeCell);
        isX = !isX;
    }else if(!isX){
        drawO(activeCell)
        isX = !isX;
    }
});

function drawLine(x1,y1 , x2 , y2){
    ctx.beginPath();
    ctx.moveTo(x1 , y1)
    ctx.lineTo(x2 , y2);
    ctx.stroke();
}
function drawXOBox(){
drawLine(166 , 20 , 166 , 480);
drawLine(333 , 20 , 333 , 480);
drawLine(20 , 166 , 480 , 166);
drawLine(20 , 333 , 480 , 333);
}
function getCell(mousePosX , mousePosY){
    if(mousePosX < 166 && mousePosY < 166){
        activeCell = 1;
    }else if(mousePosX < 333  &&  mousePosY < 166){
        activeCell = 2;
    }else if( mousePosX > 333  &&  mousePosY < 166){
        activeCell = 3;
    }else if(mousePosX < 166 && mousePosY > 166 && mousePosY < 333){
        activeCell = 4;
    }else if(mousePosX > 166  && mousePosX < 333  && mousePosY > 166 && mousePosY < 333){
        activeCell = 5;
    }else if(mousePosX  > 333 &&  mousePosY > 166 && mousePosY < 333 ){
        activeCell = 6;
    }else if(mousePosX < 166  && mousePosY > 333){
        activeCell = 7;
    }else if(mousePosX > 166 && mousePosX < 333  &&  mousePosY > 333){
        activeCell = 8;
    }else if(mousePosX > 333  && mousePosY > 333){
        activeCell = 9;
    }
}

function drawO(cell){

    switch (cell) {
        case 1:  
            ctx.beginPath();
            ctx.arc(85, 85, 70, 0, 2 * Math.PI, false);
            ctx.stroke();
            break;
        case 2:  
            ctx.beginPath();
            ctx.arc(250, 85, 70, 0, 2 * Math.PI, false);
            ctx.stroke();
            break;
        case 3:  
            ctx.beginPath();
            ctx.arc(420, 85, 70, 0, 2 * Math.PI, false);
            ctx.stroke();
            break;
        case 4:  
            ctx.beginPath();
            ctx.arc(85, 250, 70, 0, 2 * Math.PI, false);
            ctx.stroke();
            break;
        case 5:  
            ctx.beginPath();
            ctx.arc(250, 250, 70, 0, 2 * Math.PI, false);
            ctx.stroke();
            break;
        case 6:  
            ctx.beginPath();
            ctx.arc(420, 250, 70, 0, 2 * Math.PI, false);
            ctx.stroke();
            break;
        case 7:  
            ctx.beginPath();
            ctx.arc(85, 420, 70, 0, 2 * Math.PI, false);
            ctx.stroke();
            break;
        case 8:  
            ctx.beginPath();
            ctx.arc(250, 420, 70, 0, 2 * Math.PI, false);
            ctx.stroke();
            break;
        case 9:  
            ctx.beginPath();
            ctx.arc(420, 420, 70, 0, 2 * Math.PI, false);
            ctx.stroke();
            break;
        default:
            break;
    }


}


function drawX(cell){
    switch (cell) {
        case 1:
            drawLine(20,20,150,150);
            drawLine(150,20,20,150);
            break;
        case 2:
            drawLine(180,20,320,150);
            drawLine(320,20,180,150);
            break;
        case 3:
            drawLine(350,20,480,150);
            drawLine(480,20,340,150);
            break;
        case 4:
            drawLine(20,180,150,320);
            drawLine(150,180,20,320);
            break;
        case 5:
            drawLine(180,180,320,320);
            drawLine(320,180,180,320);
            break;
        case 6:
            drawLine(340,180,470,320);
            drawLine(480,180,350,320);
            break;
        case 7:
            drawLine(20,350,150,470);
            drawLine(150,350,20,470);
            break;
        case 8:
            drawLine(180,350,320,470);
            drawLine(320,350,180,460);
            break;
        case 9:
            drawLine(350,350,470,460);
            drawLine(470,350,350,460);
            break;
        default:
            break;
    }
}