// Callable Objects

function name() {
	var fullname = "Godfred Nsabo";
	
	function concat( name ){
		return "Mr." + name;
	}
	return concat( fullname) ;
}

/*
The Logic behind 

function name() {
var fullname = "Godfred Nsabo";
//storing

function concat (name = "Godfred Nsabo") {
	return "Mr. Godfred Nsabo";
}
	return "Mr. Godfred Nsabo";
}
*/


function name ( fullname ){
	return fullname.firstname + fullname.lastname;
}

console.log( name( {firstname:"Godfred", lastname:"Nsabo"} ) );


function name ( fullname ){
	
	//return fullname();
	return fullname;
}

console.log(name( function(){ return " embedd"; } ));
