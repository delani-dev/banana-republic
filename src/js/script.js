$( '.nextSection').click(function() {
  $('#form-container').toggleClass('hideForm');
  $('#contentContainer').toggleClass('showContent');
  $('.nextSection').toggleClass('formHidden');
});

$(".clearForm").click(function() {
  $(".form-group input").val("");
  $(".form-group input").focus("");
});

