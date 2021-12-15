module.exports = (sequelize, dataTypes) => {
    let alias = 'Ingredient';
    let cols = {
        ingredient_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        ingredient_name: {
            type: dataTypes.STRING(30),
            allowNull: false
        },
        ingredient_active: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
    };
    let config = {
        tableName : 'ingredients',
        timestamps: false
    }
    const Ingredient = sequelize.define(alias, cols, config); 

    Ingredient.associate = function (models) {
        Ingredient.belongsToMany(models.Product, {
            as: "product",
            through: 'Ingredients_Products',
            foreignKey: 'ingredients_products_productid',
            // otherKey: 'ingredients_products_productid',
            //          timestamps: false
        })
    }

    return Ingredient
};
