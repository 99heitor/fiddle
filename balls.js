
// Variáveis
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var raf;
var running = false;
var balls = new Array();

// Funções auxiliares
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function resizeCanvas() {

   
}


function createBalls(){
	balls = [];
	ctx.fillStyle = 'rgba(255,255,255,1)';
	ctx.fillRect(0,0,canvas.width,canvas.height);
	for (var i = 0; i < 15; i++) {
		balls.push(new Ball());
	}
}


function clear() {
  ctx.fillStyle = 'rgba(255,255,255,0)';
  ctx.fillRect(0,0,canvas.width,canvas.height);
}

function draw() {
  clear();
  for (var i in balls) {

	  balls[i].draw();
	  balls[i].x += balls[i].vx;
	  balls[i].y += balls[i].vy;

	  if (balls[i].y + balls[i].vy > canvas.height || balls[i].y + balls[i].vy < 0) {
	    balls[i].vy = -balls[i].vy;
	  }
	  if (balls[i].x + balls[i].vx > canvas.width || balls[i].x + balls[i].vx < 0) {
	    balls[i].vx = -balls[i].vx;
		}
	}

	
window.requestAnimationFrame(draw);

}	

// objeto Ball

function Ball () {
	this.x = Math.floor((Math.random() * canvas.width) + 1);
	this.y = Math.floor((Math.random() * canvas.height) + 1);
	this.vx = Math.floor((Math.random() *14) + 1);
	this.vy = Math.floor((Math.random() *14) + 1);
	this.radius = Math.floor((Math.random() *30) + 10);
	this.color = getRandomColor();	
}

Ball.prototype.draw = function(){
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
	ctx.fill();
}


//Eventos
window.addEventListener('resize', resizeCanvas, false);
window.addEventListener('click',createBalls,false);

//Execução
resizeCanvas();
createBalls();
window.requestAnimationFrame(draw);
