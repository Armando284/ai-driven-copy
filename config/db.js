const env = require('./env')
const logger = require('../src/utils/logger')
const { Sequelize } = require('sequelize')

const config = {
  development: {
    username: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    host: env.DB_HOST,
    dialect: 'postgres',
    logging: msg => logger.debug(msg),
  },
  test: {
    username: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    host: env.DB_HOST,
    dialect: 'postgres',
  },
  production: {
    username: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    host: env.DB_HOST,
    dialect: 'postgres',
    logging: false, // Deactivate DB logging on production
  },
}

const sequelize = new Sequelize(config[env.NODE_ENV])

sequelize.sync()
  .then(() => logger.info('Database synced'))
  .catch((err) => logger.error('Error syncing database:', err));

module.exports = sequelize