const ClaimLetter = require('../models/claim-letter.model')

const list = async () => {
  return await ClaimLetter.findAll()
}

module.exports = {
  list,
}