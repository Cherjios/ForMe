$(document).ready(function () {
  var personalInfo = $("#personalInfo");
  var medicalHistory = $("#medicalHistory");


  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function (data) {
    $(".member-name").text(data.name.toUpperCase());
  });

  // Action when user click on "Personal information"
  personalInfo.on("click", function (event) {
    event.preventDefault();
    GotoPersonalInfo();
  })
  function GotoPersonalInfo() {
    window.location.replace("/personalInfo");
  }

//Action when user click on "Medical history"
medicalHistory.on("click", function(even){
  event.preventDefault();
  GotoMedicalHistory();
}) 

function GotoMedicalHistory(){
  window.location.replace("/medicalHistory");
}



});
