// Functions or Subroutines

function makeCoffee( sugar, milk){
	var instructions = "BOil Water,";
	instructions += " Pour into cup.";
	instructions += " Add coffee granules,";
	instructions += " Add " + sugar + " spoons of sugar.";
	instructions += " Add " + milk + "% milk.";
	
	return instructions;
}

console.log ( makeCoffee ( 2, 40 ) );

console.log ( makeCoffee ( 0, 20 ) );