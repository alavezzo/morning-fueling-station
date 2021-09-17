const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Preferences extends Model {}

Preferences.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        poetry: {
            type: DataTypes.BOOLEAN
        },
        quotes: {
            type: DataTypes.BOOLEAN
        },
        foreignPolicy: {
            type: DataTypes.BOOLEAN
        },
        coding: {
            type: DataTypes.BOOLEAN
        },
        gifs: {
            type: DataTypes.BOOLEAN
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'preferences'
    }
)

module.exports = Preferences;