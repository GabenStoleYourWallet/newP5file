var file = 100.0;
var Vx = 5;
var Vy = 0;
var loc = createVector(100.0, 100.0);
var vel = createVector(Vx, Vy);
var g = createVector(0, .5);
function setup() {
	createCanvas(800, 500);
}
function draw() {
	background(155);
	fill(255);
	loc.add(vel)add(g);
	ellipse(loc.x, loc.y, file, file);
}