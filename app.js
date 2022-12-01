const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send("hello world")
})

app.listen(3000, () => {
    console.log("listening to PORT => 3000")
})