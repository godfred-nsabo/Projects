var elemwnt = document.getElementById('style');<style>
	elemwnt.style.background = "blue";
	elemwnt.style.color = "aqua";
	elemwnt.style.width = "200px"; 

/*	elemwnt.style.cssText = "baclground: blue; color: white; width:200px"; */

console.log( getComputedStyle( elemwnt ) );