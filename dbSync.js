const sequelize = require('./config/connection');
const Article = require('./models/product');

(async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('La table des articles a été synchronisée.');
  } catch (error) {
    console.error('Erreur de synchronisation :', error);
  } finally {
    await sequelize.close();
  }
})();
