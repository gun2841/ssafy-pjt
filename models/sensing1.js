const Sequelize = require('sequelize');

module.exports = class Sensing1 extends Sequelize.Model{
    static init(sequelize) {
        return super.init({
            time: {
                type:Sequelize.DATE
            },
            num1: {
                type:Sequelize.DOUBLE
            },
            num2: {
                type:Sequelize.DOUBLE
            },
            num3: {
                type:Sequelize.DOUBLE
            },
            speed: {
                type:Sequelize.INTEGER
            },
            is_finish: {
                type:Sequelize.INTEGER
            },
            speed: {
                type:Sequelize.INTEGER
            }
        }, {
                sequelize,
                timestamps: false,
                underscored: false,
                modelName: "sensing1",
                tableName: "sensing1",
                paranoid: false,
                charset: "utf8mb4",
                collate: "utf8mb4_general_ci",
        })
    }
}