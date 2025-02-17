const express = require('express')
const router = express.Router()
const logger = require('../../../utils/logger')

router.get('/health', (req, res) => {
  const message = 'Server is working correctly!'
  logger.info(message)
  res.status(200).json({ message })
})

module.exports = router