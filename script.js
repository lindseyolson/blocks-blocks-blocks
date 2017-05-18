$(onReady);

// start onReady function
function onReady() {
  console.log('loaded JS'); // check onReady is working

// register events
$('#squareButton').on('click', createBox); // create box button
$('#outPutDiv').on('click', '.box', changeToBlack); // change selected box to black
} // end onReady function

//-------------------------------------------------

// start createBox function
function createBox(){
  console.log('createBox onClick working'); // check onClick is working

  var $d = $('<div>'); // declares a variable that holds a <div>
  $d.addClass('box'); // add the class '.box' to this <div>

  var $color = randomColor(); // declares a variable that holds a random color, from the randomColor function
  $d.css('background-color', $color); // set background-color of the selected div to $color
  $('#outPutDiv').append($d); // append $d (div created from onClick) to #hey (div with id of hey)
} // end createBox function


// start changeToBlack function
function changeToBlack () {
  $(this).css('background-color', 'black'); // sets background color of selected div to black
} // end changeToBlack function


// start randomColor function
function randomColor(){
  return '#'+(Math.random()*0xFFFFFF<<0).toString(16); // creates random color
} // end randomColor function
