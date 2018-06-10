const first = require('./data/frenchFirstNames.json')
const last = require('./data/frenchLastNames.json')
const domains = require('./data/domains.json')
const sequence = require('./sequence')
const slugify = require('./slugify')

const getGender = () => Math.random() < 0.5 ? 'male' : 'female'
const pick = arr => {
  const index = Math.floor(arr.length * Math.random())
  return arr[index]
}
const indices = sequence(0, 100)

let nextId = 1

const genderMap = {
  male: 'men',
  female: 'women'
}

const generateUser = () => {
  const id = nextId
  nextId++
  const gender = getGender()
  const mappedGender = genderMap[gender]
  const firstName = pick(first[mappedGender])
  const lastName = pick(last)
  const username = slugify(`${firstName}${lastName[0]}${id}`)
  const email = slugify(`${firstName}.${lastName}${id}`) + '@' + pick(domains)
  const avatar = `/${mappedGender}/${pick(indices)}.jpg`
  return { id, gender, firstName, lastName, username, email, avatar }
}

module.exports = generateUser
