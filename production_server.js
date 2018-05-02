const path = require('path')
const express = require('express')
const app = express()

app.use(express.static('dist'))

app.use('/src', express.static('src'))

app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'dist/index.html')))

app.listen(3000, () => console.log('ETDB listening on port 3000!'))