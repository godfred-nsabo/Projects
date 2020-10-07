// Memory Hoisting 

// It first goes through the code line by line. 
console.log( myName, printName() );

var myName = " Godfred"; // memory pointer. there is no value assigned to myName

function printName(){
	
	console.log( num, embedd() );
	var num = 1000;
	
	function embedd(){
		return "Hello World";
	}
	
	return "Sharaf Okyere";
}