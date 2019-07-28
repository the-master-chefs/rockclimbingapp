module.exports = (sequelize, DataTypes) => {
    let whatOrdered = sequelize.define('what_ordered', {
        unique_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        order_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fulfillment_date: {
            type: DataTypes.DATE
        },
        meal_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(13,2),
            allowNull: false
        },
        order_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        delivery_date: {
            type: DataTypes.DATE
        }
    },{
        freezeTableName: true,
        tableName: 'what_ordered'
    });
    return whatOrdered;
}