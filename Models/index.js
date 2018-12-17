const Sequelize = require('sequelize');
const sequelize = new Sequelize('order', 'root', 'random', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  sequelize.sync();

  module.exports = {
    sequelize
}


