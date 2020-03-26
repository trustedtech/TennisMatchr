module.exports = function (sequelize, DataTypes) {
    const Court = sequelize.define("Court", {
        court_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [10, 50]
            }
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [10, 100]
            }
        },
        lights: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        court_type: {
            type: DataTypes.STRING,
            allowNUll: false,
            validate: {
                equals: ['hard', 'clay', 'lawn', 'mixed']
            }
        }
    })
    return Court;
}