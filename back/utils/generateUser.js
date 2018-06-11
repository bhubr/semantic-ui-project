const first = require('./data/frenchFirstNames.json')
const last = require('./data/frenchLastNames.json')
const domains = require('./data/domains.json')
const cities = require('./data/cities.json')
const sequence = require('./sequence')
const slugify = require('./slugify')

const getGender = () => Math.random() < 0.5 ? 'male' : 'female'
const pick = arr => {
  const index = Math.floor(arr.length * Math.random())
  return arr[index]
}
const randomInt = max => Math.floor((max + 1) * Math.random())
const indices = sequence(0, 100)

let nextId = 1

const genderMap = {
  male: 'men',
  female: 'women'
}

const dateOfBirth = () => {
  const year = 1959 + randomInt(40)
  const day = 1 + randomInt(364)
  const date = new Date(`${year}-01-01`)
  date.setDate(day)
  return date
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
  const city = pick(cities)
  const birthDate = dateOfBirth()
  return {
    id,
    gender,
    firstName,
    lastName,
    birthDate,
    username,
    email,
    avatar,
    city
  }
}

module.exports = generateUser
