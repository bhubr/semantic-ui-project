const sequence = require('./sequence')
const generateUser = require('./generateUser')
const fs = require('fs')

const generateUsers = (num = 10) => sequence(0, num)
  .map(generateUser)

const users = generateUsers(1000)
fs.writeFileSync('users.json', JSON.stringify(users, null, 2))
