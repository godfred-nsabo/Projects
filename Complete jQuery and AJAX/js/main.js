//console.log("Hello World!");

$(document).ready(function(){

  //Previous Lesson

  //$('body').text('Hello World!'); // '' working as a selector. we work with body tag in the .js
  //$('body').html('<strong> Hello World!</strong>')
  //console.log("We are ready!");
  //console.log(document);
  //console.log($(document));
  //$('#fire').addClass('highlight');
  //$('#container >> .solid').addClass('highlight');
  //$('#container > .non-solid').addClass('highlight'); // > for immediate children
  // and >> for higher (2nd) levels
  //$('#container >>> .non-solid').addClass('highlight');

  // New Lesson

  //$('#container input').addClass('highlight');
  //$('#container input:required').addClass('highlight');
  //$('#container input[placeholder=E-mail]').addClass('highlight');
  // placeholder[]: Elements in the parenthesis is called attributes

  // for highlighting only Last Name.
  //$('#container input[placeholder="Last Name"]').addClass('highlight'); // space between text should be in quotes
  // *= for highlighting first and beneath

  $('#container input[placeholder*="First Name"]').addClass('highlight');




});
