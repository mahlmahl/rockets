var Particle = function(){
	
	this.pos = createVector(10, height / 2);
	this.life = total;
	this.n = -1;
	this.dna = new Dna();
	this.vel = createVector (1, 1);
	this.best = 1000;

	this.radius = 2;
	
	this.fitness = function(){
		if (this.pos.x < 0 || this.pos.y < 0 || this.pos.x > width || this.pos.y > height) return 1;
		if(this.pos.x > obstacle.x && this.pos.x < obstacle.x + obstacle.w && this.pos.y > obstacle.y && this.pos.y < obstacle.y + obstacle.h) return 1;
		return floor(100000 / (this.best * this.n));
	}
	
	this.update = function(){
		if( ! this.life) return;
		if (this.pos.x < 0 || this.pos.y < 0 || this.pos.x > width || this.pos.y > height) return;
		if(this.pos.x > obstacle.x && this.pos.x < obstacle.x + obstacle.w && this.pos.y > obstacle.y && this.pos.y < obstacle.y + obstacle.h) return;
		var dt = this.pos.dist(target);
		if(dt > 10){
			if(dt < this.best) this.best = dt;
			this.n++;
			this.vel.add(this.dna.genes[this.n]);
			this.pos.add(this.vel);
		}
		this.life--;
	}
	
	this.show = function(){
		//if( ! this.life) return;
		fill(255, 255, 51);
		noStroke();
		ellipse(this.pos.x, this.pos.y, this.radius * 2, this.radius * 2);
	}
	
	
}