// Array Modification

var array = [
	"string", 
	1000, 
	[ "embedd", 200],
	{ car: " Nissan"},
	function(){ return "drive" ;},
	" new value"
];

// Assignment

console.log( array[0] = " new string" + 100 );

console.log( array[0] += " concat");

// Creating a new element

console.log( array [ 5 ] = " model - 2021");
console.log( array[ "test"] = "test" );
console.log( array.test2 = "test2");

console.log( array.length); //length

console.log( array.shift()); // delete the 1st eleement

console.log( array.pop()); // delete the last element

console.log( array.unshift( "string", 20, 20.22, function(){}, {}, []) ); // insert new element at the begining 

console.log( array.push( 200, 350, "string")); // add element to the last

console.log( array.splice( 2, 0, 20.22, function(){}, {}, [])); // insert in the middle and deleted none. if you want delete and insert then, you do as below.

console.log( array.splice( 1, 2, 20.22, function(){}, {}, []));



