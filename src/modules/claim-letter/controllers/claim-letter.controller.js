const claimService = require('../services/claim-letter.service')

const list = async (req, res) => {
  try {
    const result = await claimService.list()
    res.status(200).json(result)
  } catch (error) {
    logger.error('List claim letters failed.', error)
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  list,
}