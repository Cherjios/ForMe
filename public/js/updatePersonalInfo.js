$(document).ready(function () {

$.get("/api/user_data").then(function(data){
    console.log(data);
    userID = data.id;


    $.get("api/personalInfo/"+userID).then(function(data){
        var object = data[0];
        console.log(object);
        CreateData("#inputName", object.name);
        CreateData("#inputLastName",object.last_Name);
        CreateData("#inputDateOfBirth", object.dateOfBirth);
        CreateData("#inputSex", object.sex);
        CreateData("#inputAddress",object.address);
        CreateData("#inputAddress2",object.address2);
        CreateData("#inputCity",object.city);
        CreateData("inputState",object.state);
        CreateData("#inputZip",object.zipCode);
        CreateData("#inputPhoneNumber",object.phoneNumber);
        CreateData("#inputWHPhoneNumber", object.whPhoneNumber);
        CreateData("#inputEmergencyName", object.emergencyContactName);
        CreateData("#inputRelationship", object.relationship);
        CreateData("#inputEmergencyPhoneNumber", object.emergencyPhoneNumber);

    
        function CreateData(selector, data){
            $(selector).attr("placeholder", data);
        }

       
       

            

            
            

            






       
        

        
   




    })



})



});