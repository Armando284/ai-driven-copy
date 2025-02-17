const app = require('./app')
const env = require('./config/env')
const winston = require('winston')
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/combined.log' })
  ]
});

app.listen(env.PORT, () => {
  logger.info(`Server is running on port: ${env.PORT}`)
})