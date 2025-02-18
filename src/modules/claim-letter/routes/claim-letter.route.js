const express = require('express')
const router = express.Router()
const logger = require('../../../utils/logger')
const sequelize = require('../../../../config/db')
const claimController = require('../controllers/claim-letter.controller')

router.get('/health', async (req, res) => {
  try {
    const message = 'Server is working correctly. DB connection has been established successfully.'
    await sequelize.authenticate();
    logger.info(message)
    res.status(200).json({ message })
  } catch (error) {
    logger.error('Unable to connect to the database:', error);
  }
})

router.get('/list', claimController.list)

module.exports = router