module.exports = (sequelize, dataTypes) => {
    let alias = 'Size';
    let cols = {
        size_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        size_name: {
            type: dataTypes.STRING(30),
            allowNull: false
        },
        size_active: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
    };
    let config = {
        tableName: 'sizes',
        timestamps: false
    }
    const Size = sequelize.define(alias, cols, config);

    Size.associate = function(models) {
        Size.hasMany(models.Product, {
            as: "products",
            // through: 'User_movie',
            // otherKey: 'produt_id',
            foreignKey: 'product_size_id',
            // timestamps: false
        })
    }

    return Size
};