const { Model, DataTypes } = require('sequelize');
const Sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        body: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelizes,
        timestamps: false,
        freezeTableName: true,
        modelName: 'comment',

    }
);

module.exports = Comment;