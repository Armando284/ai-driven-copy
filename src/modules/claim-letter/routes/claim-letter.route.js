const express = require('express')
const router = express.Router()

router.get('/health', (req, res) => {
  const message = 'Server is working correctly!'
  console.log(message)
  res.status(200).json({ message })
})

module.exports = router