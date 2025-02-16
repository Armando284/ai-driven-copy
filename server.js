const app = require('./app')
const env = require('./config/env')
const debug = require('debug')('DEV:AI_DRIVEN_API')

debug('Starting %o', 'DEV:AI_DRIVEN_API')
app.listen(env.PORT, () => {
  debug(`Server is running on port: ${env.PORT}`)
})