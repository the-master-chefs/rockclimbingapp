module.exports = (sequelize, DataTypes) => {
    var Stock = sequelize.define("Stock", {
        meal_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        fulfillment_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(13, 2),
            allowNull: false
        },
        title1: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        title2: DataTypes.STRING(50),
        title3: DataTypes.STRING(50),
        line04: DataTypes.STRING(50),
        line05: DataTypes.STRING(50),
        line06: DataTypes.STRING(50),
        line07: DataTypes.STRING(50),
        line08: DataTypes.STRING(50),
        line09: DataTypes.STRING(50),
        line10: DataTypes.STRING(50),
        line11: DataTypes.STRING(50),
        line12: DataTypes.STRING(50),
        line13: DataTypes.STRING(50),
        line14: DataTypes.STRING(50),
        line15: DataTypes.STRING(50),
        line16: DataTypes.STRING(50),
        line17: DataTypes.STRING(50),
        line18: DataTypes.STRING(50),
        line19: DataTypes.STRING(50),
        line20: DataTypes.STRING(50),
        imageURL: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    },{
        freezeTableName: true,
        tableName: 'Stock'
    });
    return Stock;
}
