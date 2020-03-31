module.exports = function (sequelize, DataTypes) {
    const Player = sequelize.define("Player", {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [5, 25],
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: [5,75],
                isEmail: {
                    msg: 'Please enter a valid email address'
                }
            }    
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [5,128]
            }
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                min: 1,
                max: 6
            }
        }
    })
    return Player;
}