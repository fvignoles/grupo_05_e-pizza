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
        tableName : 'doughs',
        timestamps: false
    }
    const Dough = sequelize.define(alias, cols, config); 

    // Product.associate = function (models) {
    //     User.belongsTo(models.Category, { // models.Category -> Movies es el valor de alias en movie.js
    //         as: "categories",
    //         // through: 'User_movie',
    //         foreignKey: 'user_category_id',
    //         // otherKey: 'movie_id',
    //         // timestamps: false
    //     })
    // }

    return Dough
};
