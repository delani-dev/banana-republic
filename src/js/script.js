// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
});

$( '.nextSection').click(function() {
  $('#form-container').toggleClass('hideForm');
  $('#contentContainer').toggleClass('showContent');
  $('.nextSection').toggleClass('formHidden');
});
