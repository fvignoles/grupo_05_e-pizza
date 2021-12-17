module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    let cols = {
        product_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        product_size_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        product_dough_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        product_name: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        product_description: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        product_image: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        product_price: {
            type: dataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        product_active: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
    };
    let config = {
        tableName: 'products',
        timestamps: false
    }
    const Product = sequelize.define(alias, cols, config);

    Product.associate = function(models) {
        Product.belongsTo(models.Size, {
            as: "sizes",
            //          through: 'User_movie',
            foreignKey: 'product_size_id',
            // otherKey: 'size_id',
            //          timestamps: false
        })

        Product.belongsTo(models.Dough, {
            as: "doughs",
            //          through: 'User_movie',
            foreignKey: 'product_dough_id',
            // otherKey: 'dough_id',
            //          timestamps: false
        })

        Product.belongsToMany(models.Ingredient, {
            as: "ingredient",
            through: 'Ingredients_Products',
            foreignKey: 'ingredients_products_productid',
            //otherKey: 'ingredients_products_productid',
            //          timestamps: false
        })
    }
    return Product
};