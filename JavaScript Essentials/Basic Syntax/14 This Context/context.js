//console.log( this );

var object = {
	prop: this,
	method: function(){return this; }
};

var object1 = {
	prop: this,
	embedd:{
		embedd: true,
	method: function(){return this; } }
};

var this_array = [
	this, 
	function(){ return this; }
];

function global(){
	console.log('from global', this );
	
	function sub(){ console.log( 'from sub', this )}
	 sub();
}
console.log( global.call ( object ) );

new global(); //adds a new context to this keyword

new object1.embedd.method();
