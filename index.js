const express = require('express')
const app = express()
const port = 3000

const cards = require('./cards');

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/index', function (req, res) {
    res.render('index', { data: cards.html()})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))