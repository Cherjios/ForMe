$(document).ready(function () {

    $("#GetPersonalInfo").on("submit", function (event) {
        event.preventDefault();

        $.get("/api/user_data").then(function (data) {
            console.log(data);
            // $(".member-name").text(data.id);

            var personalInfoData = {
                name: $("#inputName").val().trim(),
                last_Name: $("#inputLastName").val().trim(),
                address: $("#inputAddress").val().trim(),
                address2: $("#inputAddress2").val().trim(),
                city: $("#inputCity").val().trim(),
                state: $("#inputState").val().trim(),
                zipCode: $("#inputZip").val().trim(),
                phoneNumber: $("#inputPhoneNumber").val().trim(),
                whPhoneNumber: $("#inputWHPhoneNumber").val().trim(),
                dateOfBirth: $("#inputDateOfBirth").val().trim(),
                sex: $("#inputSex").val().trim(),
                emergencyContactName: $("#inputEmergencyName").val().trim(),
                relationship: $("#inputRelationship").val().trim(),
                emergencyPhoneNumber: $("#inputEmergencyPhoneNumber").val().trim(),
                UserId: data.id
            }
            console.log(personalInfoData);

            if (isEmpty(personalInfoData.name)) {
                $("#inputName").addClass("error");
                showErr("Name is required");
            }
            else if (isEmpty(personalInfoData.last_Name)) {
                $("#inputLastName").addClass("error");
                showErr("Last Name is required");
            }
            else if (isEmpty(personalInfoData.address)) {
                $("#inputAddress").addClass("error");
                showErr("Address is required");
            }
            else if (isEmpty(personalInfoData.address)) {
                $("#inputCity").addClass("error");
                showErr("City is required");
            }
            else if (isEmpty(personalInfoData.state)) {
                $("#inputState").addClass("error");
                showErr("State is required");
            }
            else if (isEmpty(personalInfoData.zipCode)) {
                $("#inputZip").addClass("error");
                showErr("Zip code is required");
            }
            else if (isEmpty(personalInfoData.phoneNumber)) {
                $("#inputPhoneNumber").addClass("error");
                showErr("Phone Number is required");
            }
            else if (isEmpty(personalInfoData.dateOfBirth)) {
                $("#inputDateOfBirth").addClass("error");
                showErr("Day of birth is required");
            }
            else if (isEmpty(personalInfoData.sex)) {
                $("#inputSex").addClass("error");
                showErr("Sex is required");
            }
            else if (isEmpty(personalInfoData.emergencyContactName)) {
                $("#inputEmergencyName").addClass("error");
                showErr("Emergency Contact Name is required");
            }
            else if (isEmpty(personalInfoData.relationship)) {
                $("#inputRelationship").addClass("error");
                showErr("Emergency Contact Relationship is required");
            }
            else if (isEmpty(personalInfoData.emergencyPhoneNumber)) {
                $("#inputEmergencyPhoneNumber").addClass("error");
                showErr("Emergency Contact Phone Number is required");
            }
            else {
                $.post("/api/personalInfo", personalInfoData)
                    .then(function (result) {
                        console.log(result);
                        console.log(result);
                        // location.reload();
                        window.location.replace("/members");
                    }).fail(function (err) {
                        showErr("Error occurred while Saving, check all the values entered")
                    });
                $("#inputName").removeClass("error");
                $("#inputLastName").removeClass("error");
                $("#inputLastName").removeClass("error");
                $("#inputAddress").removeClass("err");
                $("#inputCity").removeClass("err");
                $("#inputState").removeClass("err");
                $("#inputZip").removeClass("err");
                $("#inputPhoneNumber").removeClass("err");
                $("#inputDateOfBirth").removeClass("err");
                $("#inputSex").removeClass("err");
                $("#inputEmergencyName").removeClass("err");
                $("#inputRelationship").removeClass("err");
                $("#inputEmergencyPhN").removeClass("err");

            }

        });


        function isEmpty(str) {
            if (str === "" || str === null || str === undefined) {
                return true;
            }
            return false;
        }

        function showErr(err) {
            $("#alert .msg").text(err);
            $("#alert").fadeIn(500);
        }


    });


});




