const app = require('./app')
const env = require('./config/env')
// const debug = require('debug')('DEV:AI_DRIVEN_API')
const winston = require('winston')
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/combined.log' })
  ]
});

// debug('Starting %o', 'DEV:AI_DRIVEN_API')
app.listen(env.PORT, () => {
  // debug(`Server is running on port: ${env.PORT}`)
  logger.info(`Server is running on port: ${env.PORT}`)
})