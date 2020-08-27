$(document).ready(function () { 
    $.get("/api/user_data").then(function (data) {
        console.log(data);
        userID = data.id;

        $.get("api/personalInfo/" + userID).then(function (data) {
            var object = data[0];
            console.log(object);
            CreateData("#inputName", object.name);
            CreateData("#inputLastName", object.last_Name);
            CreateData("#inputDateOfBirth", object.dateOfBirth);
            CreateData("#inputSex", object.sex);
            CreateData("#inputAddress", object.address);
            CreateData("#inputAddress2", object.address2);
            CreateData("#inputCity", object.city);
            CreateData("inputState", object.state);
            CreateData("#inputZip", object.zipCode);
            CreateData("#inputPhoneNumber", object.phoneNumber);
            CreateData("#inputWHPhoneNumber", object.whPhoneNumber);
            CreateData("#inputEmergencyName", object.emergencyContactName);
            CreateData("#inputRelationship", object.relationship);
            CreateData("#inputEmergencyPhoneNumber", object.emergencyPhoneNumber);

            function CreateData(selector, data) {
                $(selector).val(data);
            }

            $("#updateButton").on("submit", PutPersonalInformationData);

            // Update a given post, bring user to the blog page when done
            function updatePersonalInfo(PersonalInfoData) {
                $.ajax({
                    method: "PUT",
                    url: "/api/personaInfoItem/",
                    data: PersonalInfoData
                })
                    .then(function () {
                        window.location.href = "/members";
                    });
            }

            $("#GetPersonalInfo").on("submit", PutPersonalInformationData );


            function PutPersonalInformationData(event) {
                event.preventDefault();

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
                    UserId: object.UserId,
                    id: object.id
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
                    updatePersonalInfo(personalInfoData);
                }

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

            }

            

            

        });



    })



});



