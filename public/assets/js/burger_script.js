// $(function() {
//     $("#submit-btn").on("click", function(event) {
//         event.preventDefeault();
    
//         var newBurger = {
//             burger_name: $("#user-burger").val().trim(),
//             devoured: 0
//         };
//         //add
//         $.ajax("/api/burgers", {
//             type: "POST",
//             data: newBurger
//           }).then(
//             function() {
//               console.log("added new burger!");
//               // Reload the page to get the updated list
//               location.reload();
//             }
//           );

//           //delete
//           $(".delete-cat").on("click", function(event) {
//             var id = $(this).data("id");
        
//             // Send the DELETE request.
//             $.ajax("/api/cats/" + id, {
//               type: "DELETE"
//             }).then(
//               function() {
//                 console.log("deleted cat", id);
//                 // Reload the page to get the updated list
//                 location.reload();
//               }
//             );
//           });
//     }) 
// })
