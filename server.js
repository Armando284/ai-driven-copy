const app = require('./app')
const env = require('./config/env')
const logger = require('./src/utils/logger')

app.listen(env.PORT, () => {
  logger.info(`Server is running on port: ${env.PORT}`)
})