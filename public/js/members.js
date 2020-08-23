$(document).ready(function() {
  var personalInfo = $("#personalInfo");


  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.name.toUpperCase());
  });

  // Function when user click on "Personal information"

personalInfo.on("click",function(event){
  event.preventDefault();
  GotoPersonalInfo();
})

   function GotoPersonalInfo() {
     window.location.replace("/personalInfo");
  }

});
