var classTrainers = [ " Thomas", " Sharaf", " Kristine"]
/*
console.log( classTrainers[0] );
console.log( classTrainers[1] );
console.log( classTrainers[2] );
*/

for(var eachNames = 0; eachNames < classTrainers.length; eachNames++ ){
	console.log( classTrainers [ eachNames ]);
}

 // inverted - deincrement
for(var eachNames = classTrainers.length - 1; eachNames >=0; eachNames-- ){
	console.log( classTrainers [ eachNames ]);
}

// For in - auto incrementing and clean to use

for (var index in classTrainers){
	console.log( classTrainers [ index ]);
}