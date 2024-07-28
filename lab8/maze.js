$(document).ready(function () {
  $("#start").click(startClick);
  $("#end").mouseover(endHover);
  $(".boundary").mouseover(boundaryHover);
  $("#maze").mouseleave(mazeLeave);
});

function startClick() {
  $(".boundary").removeClass("youlose");
  $("#status").text('Click the "S" to begin.');
  $("#maze").mouseleave(mazeLeave);
}

function endHover() {
  if ($(".youlose").length === 0) {
    $("#status").text("You win! :]");
  }
}

function boundaryHover() {
  $(".boundary").addClass("youlose");
  $("#status").text("You lose! :[");
}

function mazeLeave() {
  $(".boundary").addClass("youlose");
  $("#status").text("You lose! :[");
}
