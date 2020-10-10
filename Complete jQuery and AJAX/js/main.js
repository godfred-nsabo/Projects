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

  // Selcting Inputs

  //$('#container input').addClass('highlight');
  //$('#container input:required').addClass('highlight');
  //$('#container input[placeholder=E-mail]').addClass('highlight');
  // placeholder[]: Elements in the parenthesis is called attributes

  // for highlighting only Last Name.
  //$('#container input[placeholder="Last Name"]').addClass('highlight'); // space between text should be in quotes
  // *= for highlighting first and beneath

  //$('#container input[placeholder*="Last Name"]').addClass('highlight');

  //console.log($('#container').find('.hot'));
  //console.log($('#container').find('.hot').children()); // highlighting the children of the parent Hot.

//console.log($('#container').find('.hot').children('.non-solid')); // WE using the children function to filter

//$('#container').find('.hot').children('.sold').addClass('highlight');

//$('#container').find('.hot').children('.non-solid').addClass('highlight');

//First, Last and Prev

//First
//$('#container').find('.hot').children().first().addClass('highlight');

// Last
//$('#container').find('.hot').children().last().addClass('highlight');

// for the middle: either .last().prev() or .first().next()

//$('#container').find('.hot').children().first().next().addClass('highlight');

// Parent highlight
//$('#snow').parent().addClass('highlight');

$('#snow').parent().find('.title').addClass('highlight');
// the hierachy parent to go up, children to go down.
//console.log($('#snow').parent());

//console.log($('#snow').closest('.temperature')); // closest selector to the parent

console.log($('#snow').closest('#container')); // closest selector to the parent for the whole container

















});
