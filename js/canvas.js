// Variables!
var color = "red";
var radius = 15;
//You will want to add more
var canvas = document.getElementById('canvas');
canvas.width = window.innerWidth * .75;
canvas.height = window.innerHeight * .75;
var x = 100;
var y = 75;

var ctx = canvas.getContext("2d");
var clr = document.getElementById('clr');
clr.addEventListener('change', function() {
    color = this.value;
});

var start = false;

window.addEventListener('load',function(e){
    console.log("loading window...")
    ctx.fillStyle = color;
    draw()
  })

  
canvas.addEventListener('mousemove', function(e) {
    x = e.x;
    y = e.y;
    draw(e.pageX - radius, e.pageY - radius);
});


window.addEventListener('keydown', function(e) {
  
    if (e.keyCode == 66) {
        color = "rgb(0, 0, 255)";
        console.log("I hit the blue");
    }

    if (e.keyCode == 71) {
        console.log("I hit the green");
    }

    if (e.keyCode == 82) {
        color = "rgb(255, 0, 0)";
        console.log("I hit the red");
    }

    if (e.keyCode == 89) {
        color = "rgb(255, 255, 0)";
        console.log("I hit the yellow");
    }

    if (e.keyCode == 32) {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        console.log("cleaned");
    }

    if (e.keyCode == 38) {
        start = true;
    }
    
    if (e.keyCode == 40) {
        start = false;
    }

});


function draw(x, y) {
    if (!start) {
        ctx.beginPath();
        console.log("I am going to draw!");
        ctx.fillStyle = color;
        ctx.arc(x, y, 15, 0, 2 * Math.PI);
        ctx.fill();

    }
}