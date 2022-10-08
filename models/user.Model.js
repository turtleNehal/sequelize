module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        
        
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
          },
        last_name: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phonenumber: {
            type: DataTypes.STRING,
            allowNull: false
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false
        },
       
        password: {
            type: DataTypes.STRING,
            allowNull: false
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
    return User
}