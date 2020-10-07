// Scope and Closures

var engine = {
	
	maker: "Toyota",
	headGasket: {
		pots: [
			"piston " + 1,
			"piston " + 2,
		]
	}
}
console.log( engine.headGasket.pots.maker );

function runExpression(){
	
	var num = 100;
	
	function sum(){
		
		var num_2 = 43;
		
		return num + num_2;
	}
	return sum();
	
}

function runExpression2(){
	
	var num = 100;
	
	function sum(){
		
		var num_2 = 43;
		
		return num + num_2;
	}
	sum();
	
	console.log( num_2);
	
}

function runExpression3(){
	
	var num = 100;
	
	function sum(num_2){
				
		return num + num_2;
	}
	console.log( sum(18), sum(42));
	
}























