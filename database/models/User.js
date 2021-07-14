module.exports = (sequelize, dataTypes) => {
    let alias = 'Users';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
        },
        fullName: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },   
        pass: {
            type: dataTypes.STRING
        }
    };
    let config = { 
        tableName: 'Users', 
        timestamps: false};

    const User = sequelize.define(alias, cols, config);

    return User

};