$(document).ready(function () {

$.get("/api/user_data").then(function(data){
    console.log(data);
    userID = data.id;


    $.get("api/personalInfo/"+userID).then(function(data){
        var object = data[0];
        console.log(object);
        CreateData("Name",object.name);
        CreateData("Last Name",object.last_Name);
        CreateData("Day of birth", object.dateOfBirth);
        CreateData("Sex", object.sex);
        CreateData("Address",object.address);
        CreateData("Address2",object.address2);
        CreateData("City",object.city);
        CreateData("State",object.state);
        CreateData("Zip code",object.zipCode);
        CreateData("Phone Number",object.phoneNumber);
        CreateData("Work/Home Number", object.whPhoneNumber);
        CreateData("Emergency Concat Name", object.emergencyContactName);
        CreateData("Relationship", object.relationship);
        CreateData("Emergency Concat Phone Number", object.emergencyPhoneNumber);

    
        function CreateData(title, data){
            var h3 = $("<h3>").text(title+":");
            var h4 = $("<h2>").text(data);
            h4.addClass("text-success")
            var input = $("<input>");
            input.addClass("form-control");
            if(title === "Day of birth"){
                input.attr("type","date")
            }
            else{
                input.attr("type","text")
            }
            var button = $("<button>").text("Update");
            button.addClass("btn btn-warning")
            var infoHere = $("#infoHere");
            infoHere.append(h3);
            infoHere.append(h4);
            infoHere.append(input);
            infoHere.append(button);  
        }

            

            
            

            






       
        

        
   




    })



})



});