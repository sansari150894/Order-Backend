const Sequelize = require('sequelize');
const {sequelize} = require('./Index');

const product = sequelize.define('product', {
    id:{ type: Sequelize.INTEGER , primaryKey:true, autoIncrement: true},
    name: { type: Sequelize.STRING },
    price: { type: Sequelize.INTEGER },
    weight:{ type: Sequelize.INTEGER },
  });

module.exports = {
    product
}