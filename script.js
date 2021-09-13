var x;
var v;
function setup() {
	createCanvas(500, 400);

  x = 30;
  v = 10;
}



function draw() {
	background(225);

  fill ('red')
	circle(x,130,20);

  x = x + v;

  if (x > 500) {
    v = -5;
  }
  if (x < 0) {
    v = 5;
  }






}
