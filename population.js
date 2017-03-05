var Population = function(num){
	
	this.particles = [];
	this.pool = [];
	this.generation = 0;
	
	this.create = function(){
		
		this.generation++;
		
		this.particles = [];
		for(var i = 0; i < num; i++){
			this.particles.push(new Particle());
		}
		
	}
	
	this.mate = function(){
		
		this.generation++;
		
		var tot = this.pool.length;
		this.particles = [];
		var genes;
		var p1, p2, vec, p;
		
		for(var i = 0; i < num; i++){
			p1 = floor(Math.random() * tot);
			p2 = floor(Math.random() * tot);
			genes = [];
			for(var j = 0; j < total; j++){
				//if(Math.random() < 0.5){
				if(Math.random() < 0.5){
					vec = this.pool[p1].dna.genes[j];
				}else{
					vec = this.pool[p2].dna.genes[j];
				}
				if(Math.random() < 0.01){//mutation
					vec = p5.Vector.random2D();
				}
				genes.push(vec);
			}
			p = new Particle();
			p.dna = new Dna(genes);
			this.particles.push(p);
		}
		
	}
	
	this.update = function(){
		for(var i = 0; i < num; i++){
			this.particles[i].update();
			this.particles[i].show();
			if( ! this.particles[i].life){
				this.evaluate();
				break;
			}
		}
	}
	
	this.evaluate = function(){
		var fit;
		this.pool = [];
		for(var i = 0; i < num; i++){
			
			fit = this.particles[i].fitness();

			for(var m = 0; m < fit; m++){
				this.pool.push(this.particles[i]);
			}

		}
		
		this.mate();
	}
	
}