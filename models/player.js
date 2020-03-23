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
                isUnique: connection.validateIsUnique(
                    'username',
                    'This username already exists.'
                )
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
                },
                isUnique: connection.validateIsUnique(
                    'email',
                    'This email already exists.'
                )
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8,128]
            }
        }
    })
    return Player;
}