$(document).ready(function () {
  var personalInfo = $("#personalInfo");
  var medicalHistory = $("#medicalHistory");
  var dentalHistory = $("#dentalHistory");
  var personalInfoTitle = $("#personalInfoTitle");
  var personalInfoB = $("#personalInfoB");


  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function (data) {
    console.log(data);
    $(".member-name").text(data.name.toUpperCase());
  });

  $.get("/api/personalInfo").then(function (data) {
    
      console.log(data);
      var span = $("<span>").text("Completed");
      span.addClass("text-success");
      personalInfoTitle.append(span);
      var update_button = $("<button>");
      update_button.text("Update");
      update_button.addClass("btn btn-warning");
      personalInfo.append(update_button);
      personalInfoB.attr("style", "display:none");
    
    
  });

  // Action when user click on "Personal information"
  personalInfoB.on("click", function (event) {
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

//Action when user click on "Dental history"
dentalHistory.on("click", function(even){
  event.preventDefault();
  GotoDentalHistory();
}) 

function GotoDentalHistory(){
  window.location.replace("/dentalHistory");
}




});
