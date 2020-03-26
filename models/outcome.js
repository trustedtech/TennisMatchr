module.exports = function (sequelize, DataTypes) {
    const Outcome = sequelize.define("Outcome", {
        event_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        winner: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return Outcome;
}