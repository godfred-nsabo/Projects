// Inferred Globals

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
		
		console.log( engine);	
	}
	sum();
		
}

function runExpression3(){
	
	var num = 100;
	
	function sum(num_2){
		
		var engine = "string engine" ;
		console.log( engine);	
	
	}
	sum();
}


function runExpression4(){
	
	var num = 100;
	
	function sum(){
		
		 engine = "new engine" ;
		//console.log( engine);	
	}
	sum();
}

function runExpression5(){
	
	var num = 100;
	
	function sum(){
		
		test = "new engine" ;
		//console.log( engine);	
	}
	sum();
}

console.log( window.test );




















