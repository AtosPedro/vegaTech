const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const Supplier = require('./Supplier')


module.exports = (sequelize, DataTypes)=>{
    const Material  = sequelize.define('Material',{
        material_id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        },
        supplier_id:{
            type: DataTypes.INTEGER,        
            allowNull: false,
            onDelete: 'CASCADE',
            references: {
                model: 'Supplier',
                key: 'supplier_id'
            }
        },
        code:{
            type: DataTypes.STRING,
            allowNull: false
        },
        name:{
            type: DataTypes.STRING(20),
            allowNull: false
        },
        description:{
            type: DataTypes.STRING(50),
            allowNull: false
        },
        fiscalCode: {
            type: DataTypes.STRING(17),
            allowNull: false
        },
        specie:{
            type: DataTypes.STRING,
            allowNull: false
        },
        createdBy:{
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: config.username
        },
        updatedBy:{
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: config.username
        }
    })
    
    return Material;
};

