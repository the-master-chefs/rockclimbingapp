module.exports = function(sequelize, DataTypes) {
  let Customer = sequelize.define("Customer", {
    unique_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    firstname: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    phonenumber: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    address1: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    address2: DataTypes.STRING(100),
    address3: DataTypes.STRING(100),
    city: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    state: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    zip: DataTypes.STRING(10)
  },{
    freezeTableName: true,
    tableName: 'Customer'
  });
  return Customer;
};
