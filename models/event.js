module.exports = function (sequelize, DataTypes) {
    const Event = sequelize.define("Event", {
        creator: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len:[1]
            }
        },
        event_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        event_time: {
            type: DataTypes.DATE,
            allowNull: false
        },
        event_type: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                equals: ['casual', 'practice', 'match', 'tournament']
            }
        },
        style: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                equals: ['singles', 'doubles', 'open']
            }
        },
        players_count: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate:{
                min: 1,
                max: 8
            }
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        notes: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [0-150]
            }
        }
    })
    return Event;
}