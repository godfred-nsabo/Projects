//console.log("Hello World!");

/*$(document).ready(function(){

  //============HTML and Text===================

  //$('body').text('Hello World!'); // '' working as a selector. we work with body tag in the .js
  //$('body').html('<strong> Hello World!</strong>')
  //console.log("We are ready!");
  //console.log(document);
  //console.log($(document));

  // Selecting by ID and CLass =========================
  //$('#fire').addClass('highlight');
  //$('#container >> .solid').addClass('highlight');
  //$('#container > .non-solid').addClass('highlight'); // > for immediate children
  // and >> for higher (2nd) levels
  //$('#container >>> .non-solid').addClass('highlight');

  // ==============Selcting Inputs====================

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

//==============First, Last and Prev===============

//First
//$('#container').find('.hot').children().first().addClass('highlight');

// Last
//$('#container').find('.hot').children().last().addClass('highlight');

// for the middle: either .last().prev() or .first().next()

//$('#container').find('.hot').children().first().next().addClass('highlight');

// ====================Parent highlight===================
//$('#snow').parent().addClass('highlight');

//$('#snow').parent().find('.title').addClass('highlight');
// the hierachy parent to go up, children to go down.
//console.log($('#snow').parent());

//console.log($('#snow').closest('.temperature')); // closest selector to the parent

//console.log($('#snow').closest('#container')); // closest selector to the parent for the whole container


// ===================Click Event and Event Delegation========================

//$('.box').on('click','.box-button', function(){
//console.log('Hello!');
//$('.box').addClass('highlight');
// using the this function
//$(this).addClass('highlight');
// Using Toggle class insteas of addClass : This add class if it is not present and remove class if its already there.

//$(this).toggleClass('highlight');
//$(this).parent().toggleClass('highlight');});


// ===========Changing Events ===============

/*$('#select-menu').on('change', function(){
  //console.log('Print Hello jquery');
  //console.log($('#select-menu option:selected').val()); // .val to read the value of the selected
  //console.log($('#select-menu option:selected').text()); // .text to read the actual text of the selected
  let name = $('#select-menu option:selected').text(); // .val to read the value of the selected
  let distance = $('#select-menu option:selected').val();
  let price = $('#select-menu option:selected').data('price');

  console.log(price); //printing on the IDE
if (distance) {
  $('#feeback-message').text('You are signing up for a ' + name + ', which costs ' + price + ', to a distance of ' + distance + 'km');
} else {

$('#feeback-message').text(''); // can also use //.empty()
}

});*/
// BUG: --------------------------- need // FIXME:
//<!---==============Keyup and Key down=================
// Keydown precisely when you press the key
/*$('#input-name').on('keydown', function(){
  //console.log('Press!');
  //Repeat feedback message
  let name = $('#input-name').val();
  $('#feedback-message').text('Pleased to meet you, ' + name);

});*/
// BUG: ----------------------------- need // FIXME:
//Keyup is precisely when you release the key

/*$('#input-name').on('keyup', function(){
  console.log('Press!');
  //Repeat feedback message
  let name = $('#input-name').val();
  $('#feedback-message').text('Pleased to meet you' + name);
});

$('a').on('click', function(event){
  event.preventDefault();
  $('#feedback-message').text('The page works fine');
});



});*/

/*============== Setting up Store Items =================*/

function addItem(name, description, price, moreInfo) {

  let html = '';
html +='<div class="item">';
html +='<div class="name">' + name + '</div>';
html +='<img src="assests/coverpage.jpg"></img>';
html +='<div class="description">'+ description +'</div>';
html +='<div class="price">'+ price + '</div>';
html +='<button class="item-add" >Add to Cart</button>';
html +='<button class="item-remove">Remove</button>';
html +='<br>';
html +='<a class="more-info-link" href="#">More info</a>';
html +='<div class="more-info">' + moreInfo + '</div>';
html +='</div>';

//$('#container').append(html); // APPEND ADD ITEMS TO THE BUTTON LIST
$('#container').prepend(html); // PREPEND ADDS ITEMS TO THE FIRST LINE

}

$(document).ready(function(){

/*$('#button-create-item').on('click', function() {
  let name = $('#input-create-item').val();
  console.log(name);});*/

  /*$('#button-create-item').click(function() {
    //console.log($('#input-create-item').val());
    let name = $('#input-create-item').val();
    $('#input-create-item').val(''); async=false; });*/

//$('#container .item-remove').on('click', function(){
  //console.log('Hello');
//$('#container .item-remove').click(function(){
    //console.log('Hello');
  //  $(this).parent().remove(); // Removing affects only the present item not the new items added

//$('#container').click('.item-remove',function(){
        //console.log('Hello');
//  $(this).parent().remove();// This removes the entire item on page.

$('#container').on('click','.more-info-link', function(event) {
  event.preventDefault();

  //$(this).parent().find('.more-info').show(); // to show the more info item
//$(this).parent().find('.more-info').toggle(); // to show the more/less info item
 //fast or slow to reduce and increase the pase of showing more info.
 //you can add value to it
 //$(this).parent().find('.more-info').toggle('slow');
 //$(this).parent().find('.more-info').toggle('fast');
 //$(this).parent().find('.more-info').toggle(1000);

//======Fade In and SLide======
//$(this).parent().find('.more-info').fadeIn('slow'); // for showing the info in a faded view
//$(this).parent().find('.more-info').fadeout('slow');
//$(this).parent().find('.more-info').fadeToggle('slow');// fading in and same time toggling
$(this).parent().find('.more-info').slideToggle('fast'); // sliding in and same time toggling

//====== Aninmation ======

$(this).animate({"opacity":0.5, "margin-left": 10}, 3600)
$(this).animate({"opacity":1.0, "margin-left": 0}, 3600);

});

$('#container').on('click','.item-remove', function(){
  $(this).parent().remove(); // And this works perfectly fine
});


// ============ AJAX =======================

//$.ajax('data/item/json', function(response) {
  //console.log(response);

  // ============ Loading JSON =======================
  //Using .done(), .fail() and .always() functions

  $.ajax('data/item.json',{
    dataType: 'json',
    contentType: 'application/json',
    cache: false
  }).done(function(response) { // for successful functions
    //console.log('response');
    //console.log(response);
    let items = response.items;
    //console.log(items);
    items.forEach(function(item){
      //console.log(item);
  addItem(item.name, item.description,
    item.price, item.moreInfo);
    });

  }).fail(function (request, errorType, errorMessage){ // for failed functions
    console.log(errorMessage);
  }).always(function(){ // alawys is called whether success or failed

    })











});


//< BUG: Needs to be fixed---->
/*$.ajax('data/item.json').done(function(response) { // for successful functions
  //console.log('response');
  //console.log(response);
  let items = response.items;
  //console.log(items);
  items.forEach(function(item){
    //console.log(item);
addItem(item.name, item.description,
  item.price, item.moreInfo);
  });

}).fail(function (request, errorType, errorMessage){ // for failed functions
  console.log(errorMessage);
}).always(function(){ // alawys is called whether success or failed

})*/
