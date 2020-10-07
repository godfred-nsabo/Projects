// Constructors

// capitalise to identity as constructors

function Apple( x, y, color, score ){
	this.x = x;
	this.y = y;
	this.color = color;
	this.score = score;
}

console.log(new Apple(12, 45, "red", 100) );

var apple1 = new Apple(12, 45, "red", 80);
var apple2 = new Apple(121, 145, "blue", 100);
var apple3 = new Apple(2, 4, "black", 90);
var apple4 = new Apple(12.5, 5.8, "yellow", 50);
var apple5 = new Apple(1, 4, "gold", 70);