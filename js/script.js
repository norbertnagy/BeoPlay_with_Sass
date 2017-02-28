var modalClosed = false;

$( "#close-modal" ).click(function() {
  $(this).parent().fadeOut();
  modalClosed = true;

});
