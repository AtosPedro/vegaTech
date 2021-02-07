const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

// Model Supplier table
module.exports = (sequelize, DataTypes)=>{
    const Supplier  = sequelize.define('Supplier',{
        supplier_id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        },
        name:{
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        cnpj:{
            type: DataTypes.STRING(14),
            allowNull: false,
        },
        cep:{
            type: DataTypes.STRING(8),
            allowNull: false,
        },
        createdAt:{
            type: DataTypes.DATE,
            allowNull: false,
        },
        createdBy:{
            type: DataTypes.STRING(8),
            allowNull: false,
            defaultValue: config.username
        },
        updatedBy:{
            type: DataTypes.STRING(8),
            allowNull: false,
            defaultValue: config.username
        },
        qrCode:{
            type: DataTypes.STRING,
            allowNull: false,               
        }    
    });

        return Supplier;
}
