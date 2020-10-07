// Prototypes ar shared objects

function Apple( color, weight ){
	this.color = color;
	this.weight = weight;	
	this.eat = function(){ return "Am eating the Apple"; };
	this.throw = function() { return "Throw the spoilt Apple away" ; };
};

Apple.prototype = {
	
	eat(){ return this;}, throw() {return this; }
};

console.log(new Apple("red", 100) );

var apple1 = new Apple(	"red", 80);
var apple2 = new Apple( "blue", 100);
var apple3 = new Apple( "black", 90);
var apple4 = new Apple( "yellow", 50);
var apple5 = new Apple( "gold", 70);