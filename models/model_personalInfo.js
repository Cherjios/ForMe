module.exports = function (sequelize, DataTypes){
    var PersonalInfo = sequelize.define("PersonalInfo",{
        name:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                len:[1]
            }
        },
        last_Name:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                len:[1]
            }
        },
        address:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                len:[1]
            }
        },
        address2:{
            type:DataTypes.STRING
        },
        city:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                len:[1]
            }
        },
        state:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                len:[2]
            }
        },
        zipCode:{
            type:DataTypes.INTEGER,
            allowNull:false,
            validate:{
                len:[5]
            }
        },
        phoneNumber:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                len:[10]
            }
        },
        whPhoneNumber:{
            type:DataTypes.STRING
        },
        dateOfBirth:{
            type:DataTypes.DATEONLY,
            allowNull:false,
            isDate:true,
        },
        sex:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                len:[1]
            }
        },
        emergencyContactName:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                len:[1]
            }
        },
        relationship:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                len:[1]
            }
        },
        emergencyPhoneNumber:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                len:[10]
            }
        }
    });

    PersonalInfo.associate = function (models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        PersonalInfo.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    

   


    return PersonalInfo;


};