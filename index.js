// const mqtt = require('mqtt')
// const client = mqtt.connect('mqtt://test.mosquitto.org')

const express = require('express')
const app = express()

// client.on('message', function(topic, message) {
//     console.log(message.toString())
//     client.end()
// })

app.get('/', function(req, res) {
    res.send('Hello world')
})

app.listen(80)