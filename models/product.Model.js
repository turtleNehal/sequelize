module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('product', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
        },
        description: {
            type: DataTypes.TEXT,
        },
        published: {
            type: DataTypes.BOOLEAN
        }, 
    } ,{
        //createdAt and updatedAt gets created automatically so changing name of those columns
        freezeTableName: true,            
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
    )
    return Product
}

