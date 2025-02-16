require('dotenv').config()

const env = {
  PORT: process.env.PORT || 3000,
}

for (const key in env) {
  if (env[key] === undefined) {
    throw new Error(`Environment variable is not defined: ${key}`)
  }
}

module.exports = env