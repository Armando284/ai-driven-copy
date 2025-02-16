const express = require('express')
const logger = require('morgan')
const claimLetterRoutes = require('./src/modules/claim-letter/routes/claim-letter.route')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use('/api/claim-letter', claimLetterRoutes)

module.exports = app