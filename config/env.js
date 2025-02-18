require('dotenv').config()

const env = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 3000,
  WINSTON_LOG_LEVEL: process.env.WINSTON_LOG_LEVEL || 'info',
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_NAME,
}

for (const key in env) {
  if (env[key] === undefined) {
    throw new Error(`Environment variable is not defined: ${key}`)
  }
}

module.exports = env