var symbolName = " Value reference in Memory";  // Standard variable

let letSymbol = " scoped value"; // create symbols that respect the scope that they reside in - conditional execution context

const symName = "constant value in Memory";

// variables dont respect conditional execution context - such as if statement

if (true){
	var symbolName = " Value reference in Memory";  // Standard variable

let letSymbol = " scoped value"; 

const symName = "constant value in Memory";
}

// do not repect the 
for (var each = 0; each < 5; each++){
	var symbolName = " Value reference in Memory";  // Standard variable

let letSymbol = " scoped value"; 

const symName = "constant value in Memory";

}

function check(){
	var symbolName = " Value reference in Memory";  // Standard variable

let letSymbol = " scoped value"; // create symbols that respect the scope that they reside in - conditional execution context

const symName = "constant value in Memory";

}

// vars do not respect loops and if statement. you should prefer let to var becaue it respect the scope of execution context