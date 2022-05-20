const express = require('express');
const cors = require('cors');
require('dotenv').config()
const port = process.env.PORT || 5000;
const app = express()

// middlwere
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello')
})

app.listen(port, () => {
    console.log('listening from', port)
})