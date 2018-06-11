const sequence = require('./sequence')
const generateUser = require('./generateUser')
const fs = require('fs')

const generateUsers = (num = 10) => sequence(0, num)
  .map(generateUser)

let givenNumber = process.argv[2]
givenNumber = givenNumber ? Number(givenNumber) : undefined
const users = generateUsers(givenNumber)
console.log(users)
fs.writeFileSync('users.json', JSON.stringify(users, null, 2))
