$(document).ready(function () {
    
    $("#GetPersonalInfo").on("submit", function(event){
        event.preventDefault();
    
        var personalInfoData = {
            name:$("#inputName").val().trim(),
            last_Name:$("#inputLastName").val().trim(),
            address:$("#inputAddress").val().trim(),
            address2:$("#inputAddress2").val().trim(),
            city:$("#inputCity").val().trim(), 
            state:$("#inputState").val().trim(),
            zipCode:$("#inputZip").val().trim(),
            phoneNumber:$("#inputPhoneNumber").val().trim(),
            whPhoneNumber:$("#inputWHPhoneNumber").val().trim(),
            dateOfBirth:$("#inputDateOfBirth").val().trim(),
            sex:$("#inputSex").val().trim(),
            emergencyContactName:$("#inputEmergencyName").val().trim(), 
            relationship:$("#inputRelationship").val().trim() ,
            emergencyPhoneNumber:$("#inputEmergencyPhN") 
        }
        console.log(personalInfoData);
        if(isEmpty(personalInfoData.name)){
            $("#inputName").addClass("error");
            showErr("Name is required");
        }
        else if(isEmpty(personalInfoData.last_Name)){
            $("#inputLastName").addClass("error");
            showErr("Last Name is required");
        }
    
        
    
    })


    function isEmpty(str){
        if(str === "" || str === null || str === undefined){
            return true;
        }
        return false;
    }

    function showErr(err) {
        $("#alert .msg").text(err);
        $("#alert").fadeIn(500);
    }

});




