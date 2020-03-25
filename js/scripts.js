$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    var wordInput = $("#word").val().toUpperCase();
    alert(wordInput);
  });
});
