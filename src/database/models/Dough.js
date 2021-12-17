module.exports = (sequelize, dataTypes) => {
    let alias = 'Dough';
    let cols = {
        dough_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        dough_name: {
            type: dataTypes.STRING(30),
            allowNull: false
        },
        dough_active: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
    };
    let config = {
        tableName: 'doughs',
        timestamps: false
    }
    const Dough = sequelize.define(alias, cols, config);

    Dough.associate = function(models) {
        Dough.hasMany(models.Product, { // models.Category -> Movies es el valor de alias en movie.js
            as: "products",
            // through: 'User_movie',
            foreignKey: 'product_dough_id',
            // otherKey: 'movie_id',
            // timestamps: false
        })
    }

    return Dough
};