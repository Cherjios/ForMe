// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
var fs = require("fs");
var sendEmail = require("../config/email");




module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    res.json(req.user);
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function (req, res) {
    db.User.create({
      email: req.body.email,
      name: req.body.name,
      password: req.body.password
    })
      .then(function () {
        res.redirect(307, "/api/login");
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        name: req.user.name,
        id: req.user.id
      });
    }
  });

  app.post("/api/personalInfo", function (req, res) {
    fs.writeFile("log.json", JSON.stringify(req.body), function(err) {
      if (err) {
        return console.log(err);
      }
      console.log("Success!");
    });
    sendEmail();
    db.PersonalInfo.create(req.body).then(function (dbInfo) {
      res.json(dbInfo);
    }).catch(function (err) {
      res.status(401).json(err);
    });
  });


  app.get("/api/personalInfo/:id", function (req, res) {
    db.PersonalInfo.findAll({
      where:{
        UserId:req.params.id
      }
    }).then(function (dbItem) {
        res.json(dbItem);
    }).catch(function (err) {
        res.status(404).json(err);
    });
});

  // app.get("/api/personalInfo", function (req, res) {

  //   if (!req.personalInfo) {
  //     // The user is not logged in, send back an empty object
  //     res.json({message:"this is empty"});
  //   } else {
  //     res.json({
  //       id:req.personalInfo.id,
  //       name: req.personalInfo.name,
  //       last_name: req.personalInfo.last_Name,
  //       address: req.PersonalInfo.address,
  //       address2: req.personalInfo.address2,
  //       city:req.personalInfo.city,
  //       state:req.personalInfo.state,
  //       zipCode:req.personalInfo.zipCode,
  //       phoneNumber:req.personalInfo.phoneNumber,
  //       whPhoneNumber:req.personalInfo.whPhoneNumber,
  //       dateOfBirth:req.personalInfo.dateOfBirth,
  //       sex:req.personalInfo.sex,
  //       emergencyContactName:req.personalInfo.emergencyContactName,
  //       relationship:req.personalInfo.relationship,
  //       emergencyPhoneNumber:req.personalInfo.emergencyContactName
  //     });
  // }
  // });

  




};
