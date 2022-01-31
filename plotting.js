var  displayMobile =0;
function LetsStartM () {
//access canvas and its context
var canvas1 = document.getElementById("my_canvas1");
var ctx1 = canvas1.getContext("2d");

    if( displayMobile==0)
    {
        setTimeout(rectangleM, 100);
         displayMobile=1;
    }

}

function rectangleM()
{
    var canvas1 = document.getElementById("my_canvas1");
    var ctx1 = canvas1.getContext("2d");
    ctx1.beginPath();
    ctx1.lineWidth = 2;
    ctx1.rect(90, 130, 120, 120);
    // ctx.rect(270, 100, 120, 120);
    ctx1.strokeStyle = '#000000';
    ctx1.stroke();
    setTimeout(rectangleM1, 1000)
}

function rectangleM1()
{
    var canvas1 = document.getElementById("my_canvas1");
    var ctx1 = canvas1.getContext("2d");
    ctx1.beginPath();
    ctx1.lineWidth = 2;
    // ctx.rect(210, 150, 120, 120);
    ctx1.rect(150, 80, 120, 120);
    ctx1.strokeStyle = '#000000';
    ctx1.stroke();
    setTimeout(linesM1, 500)
}
function linesM1()
{
    var canvas1 = document.getElementById("my_canvas1");
    var ctx1 = canvas1.getContext("2d");
    ctx1.beginPath();
    ctx1.moveTo(90, 130);
    ctx1.lineTo(150, 80);

    // ctx.moveTo(210, 150);
    // ctx.lineTo(270, 100);

    ctx1.stroke();
    setTimeout(linesM2, 500)
}
function linesM2()
{
    var canvas1 = document.getElementById("my_canvas1");
    var ctx1 = canvas1.getContext("2d");
    ctx1.beginPath();
    ctx1.moveTo(210, 130);
    ctx1.lineTo(270, 80);

    // ctx.moveTo(330, 150);
    // ctx.lineTo(390, 100);

    ctx1.stroke();
    setTimeout(linesM3, 500)
}
function linesM3()
{
    var canvas1 = document.getElementById("my_canvas1");
    var ctx1 = canvas1.getContext("2d");
    ctx1.beginPath();
    ctx1.moveTo(210, 250);
    ctx1.lineTo(270, 200);

    // ctx.moveTo(330, 270);
    // ctx.lineTo(390, 220);

    ctx1.stroke();
    setTimeout(linesM4, 500)
}
function linesM4()
{
    var canvas1 = document.getElementById("my_canvas1");
    var ctx1 = canvas1.getContext("2d");
    ctx1.beginPath();
    ctx1.moveTo(90, 250);
    ctx1.lineTo(150, 200);

    // ctx.moveTo(210, 270);
    // ctx.lineTo(270, 220);

    ctx1.stroke();
    setTimeout(axisM, 500)
}
function axisM()
{
    var canvas1 = document.getElementById("my_canvas1");
    var ctx1 = canvas1.getContext("2d");
    ctx1.beginPath();
    ctx1.moveTo(150, 50);
    ctx1.lineTo(150, 200);
    ctx1.strokeStyle = '#008000';
    ctx1.stroke();

    ctx1.beginPath();
    ctx1.moveTo(59, 275);
    ctx1.lineTo(150, 200);
    ctx1.strokeStyle = '#008000';
    ctx1.stroke();

    ctx1.beginPath();
    ctx1.moveTo(150, 200);
    ctx1.lineTo(300, 200);
    ctx1.strokeStyle = '#008000';
    ctx1.stroke();
    setTimeout(arrowsM, 500)
}
function arrowsM()
{
    var canvas1 = document.getElementById("my_canvas1");
    var ctx1 = canvas1.getContext("2d");
    ctx1.beginPath();
    ctx1.moveTo(150, 50);
    ctx1.lineTo(140, 60);
    ctx1.strokeStyle = '#008000';
    ctx1.stroke();

    ctx1.beginPath();
    ctx1.moveTo(150, 50);
    ctx1.lineTo(160, 60);
    ctx1.strokeStyle = '#008000';
    ctx1.stroke();

    ctx1.beginPath();
    ctx1.moveTo(59, 275);
    ctx1.lineTo(60, 260);
    ctx1.strokeStyle = '#008000';
    ctx1.stroke();

    ctx1.beginPath();
    ctx1.moveTo(59, 275);
    ctx1.lineTo(75, 275);
    ctx1.strokeStyle = '#008000';
    ctx1.stroke();

    ctx1.beginPath();
    ctx1.moveTo(300, 200);
    ctx1.lineTo(290, 190);
    ctx1.strokeStyle = '#008000';
    ctx1.stroke();

    ctx1.beginPath();
    ctx1.moveTo(300, 200);
    ctx1.lineTo(290, 210);
    ctx1.strokeStyle = '#008000';
    ctx1.stroke();
    setTimeout(labelsM, 500)
}
function labelsM()
{
        var canvas1 = document.getElementById("my_canvas1");
        var ctx1 = canvas1.getContext("2d");
        var text = 'X';
        ctx1.font = '25px Papyrus, sans-Serif';
        ctx1.fillStyle = '#fa4b2a';
        ctx1.fillText(text,35,295);

        var text = 'Y';
        ctx1.font = '25px Papyrus, sans-Serif';
        ctx1.fillStyle = '#fa4b2a';
        ctx1.fillText(text,305,210);

        var text = 'Z';
        ctx1.font = '25px Papyrus, sans-Serif';
        ctx1.fillStyle = '#fa4b2a';
        ctx1.fillText(text,140,40);
}



function draw1(mouseX1, mouseY1) {
    var ctx = document.getElementById('my_canvas1').getContext('2d');
   
        ctx.beginPath();
        ctx.arc(mouseX1, mouseY1, 5, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillStyle = "blue";
        ctx.fill();
        v.push(mouseX1);
        v.push(mouseY1);
    
      
}