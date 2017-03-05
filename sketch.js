var total = 100;
var target;
var population;
var obstacle = {};
var gene;
 
function setup() {
	createCanvas(600, 400);
	var tx = width - floor(Math.random() * width / 3);
	var oh = height - floor(Math.random() * 50 + 50);
	target = createVector(tx, floor(Math.random() * 3 + 1) * 130);
	obstacle = {
		'x' : width / 2,
		'y' : (height - oh) / 2,
		'w' : 20,
		'h' : oh
	}
	population = new Population(500);
	population.create();
	gene = document.getElementById("gene");
}

function draw() {
	background(0);
	population.update();
	gene.innerHTML = population.generation.toString();
	fill(255, 0, 0, 200);
	ellipse(target.x, target.y, 20, 20);
	fill(255);
	rect(obstacle.x, obstacle.y, obstacle.w, obstacle.h);
}