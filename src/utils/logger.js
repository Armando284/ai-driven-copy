const { createLogger, transports, format, addColors } = require('winston')
const { combine, timestamp, ms, printf, colorize, prettyPrint, json } = format
const env = require('../../config/env')

addColors({
  error: 'red',
  warn: 'yellow',
  info: 'green',
  debug: 'blue',
  verbose: 'cyan',
  silly: 'magenta'
});

const logger = createLogger({
  level: env.WINSTON_LOG_LEVEL,
  transports: [
    new transports.Console({
      format: combine(
        colorize(),
        timestamp(),
        ms(),
        printf(({ timestamp, level, message, ms }) => {
          return `[${level}]: ${message} --${timestamp}-- ${ms}`;
        })
      ),
    }),
    new transports.File({
      filename: 'logs/combined.log',
      level: 'info',
      format: combine(
        json(),
        timestamp(),
        ms(),
        prettyPrint(),
      )
    })
  ]
});

module.exports = logger