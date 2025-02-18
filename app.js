const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const claimLetterRoutes = require('./src/modules/claim-letter/routes/claim-letter.route')


const app = express()

app.use(helmet())
app.use(morgan('dev'))
app.use(express.json())
app.use('/api/v1/claim-letter', claimLetterRoutes)

module.exports = app