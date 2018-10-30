$(document).ready(function() {
    $(".change-destroyed").on("click", function(event) {
      var id = $(this).data("id");
      var newlyDestroyed = $(this).data("destroyed");
      var newlyDestroyedState = {
        destroyed: newlyDestroyed
      };

      $.ajax("/api/things/" + id, {
        type: "PUT",
        data: newlyDestroyedState
      }).then(
        function() {
          console.log("changed destroyed to", newlyDestroyed);
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newThing = {
        name: $("#thing").val().trim(),
      };
  
      $.ajax("/api/things", {
        type: "POST",
        data: newThing,
        destroyed: false
      }).then(
        function() {
          console.log("created new thing");
          location.reload();
        }
      );
    });
  });