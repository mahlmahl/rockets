function Dna(genes){
	
	this.genes = [];
	if(genes){
		for(var i = 0; i < total; i++){
			this.genes.push(genes[i]);
		}
	}else{
		for(var i = 0; i < total; i++){
			this.genes.push(p5.Vector.random2D());
		}
	}
	
}