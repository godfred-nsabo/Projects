console.log(document.getElementById('hello'));

console.log(document.getElementsByClassName('pClass'));

console.log(document.querySelectorAll('#hello'));

console.log(document.querySelectorAll('.phello'));

console.log(document.querySelectorAll('#hello, .pClass'));

console.log(document.querySelectorAll( 'p[data-content="123], body > h1.pClass > span ' ) );
