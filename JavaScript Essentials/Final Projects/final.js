let elements = document.getElementsByName('cssProperty');
	let div = document.getElementById('modify');

function set(){
	// Creating symbols element
	// For quicker we move this from the function
	//let elements = document.getElementsByName('cssProperty');
	
	for ( let index = 0; index < elements.length; index ++ ){
		
		let cssProperty = elements[ index ].getAttribute('id');
		
		let cssValue = elements[ index ].value;
		
		//console.log( elements[index].getAttribute('id') );
		//console.log( elements[index].value );
		
		// console.log( cssProperty, cssValue);
		
		//let div = document.getElementById('modify');
		
		div.style[ cssProperty ] = cssValue;
	}
	
	//console.log( elements );
	
}

document.getElementById('set').addEventListener('click', set);