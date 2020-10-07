// Appenchild takes object documents and it appends it as a child element. That is it takes the developmwnt created and appends it into the body. 

var element = document.createElement('div');

element.style.cssText = "width:200px; height:20px; background:red;";

element.onclick = function(){ alert('My Choice'); };

document.body.appendChild( element );

var target = document.getElementById("gold");

document.body.insertBefore( element, target );