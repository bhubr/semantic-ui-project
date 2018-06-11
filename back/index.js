const express = require('express')
const users = require('./users.json')
const app = express()

app.get('/users', (req, res) => res.json(users))

app.listen(5000)
