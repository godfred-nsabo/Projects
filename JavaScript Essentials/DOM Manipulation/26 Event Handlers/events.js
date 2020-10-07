
var select =  document.getElementsByName( "cars")[0];

select.onclick = function( event /*optional*/ ){
	console.log( event ); // inline events
}; // Inline Call back function

function ClickCallback( event ){
	console.log( ' clicked by add event listener' );
}
/*select.addEventListener( 'click', function( event ){
	console.log( ' clicked by add event listener' );

} );*/

select.addEventListener( 'click', ClickCallback );

select.removeEventListener( 'click', ClickCallback );