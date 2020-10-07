console.log( document.getElementById('Hello'));

console.dir( document.getElementById('Hello')); // helping to point to the direct element your want. 

console.log( document.getElementById('Hello').innerText = "Wonderful World");

console.log( document.getElementById('Hello').innerText += " order" );

var pHello = document.getElementById('Hello').innerText = "Wonderful World";
pHello.innerText = "Wonderful World";
pHello.innerText += " order"
pHello.innerText += " order <span> hello world</span>"
pHello.innerHTML += " order <span> Hello world</span>"

pHello.outerHTML = '<h2 id="hello"> Wonderful World order <span>Hello World</span></h2>';

console.log( document.querySelectorAll('h1 span'));

var spanHq = document.querySelectorAll('h1 span')[0];

spanH1[0].innerHTML = "Link is here!!";

