const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://test.mosquitto.org')

const express = require('express')
const app = express()

const PORT = process.env.PORT || 5000;

client.on('connect', function() {
    client.subscribe('presence', function(err) {
        if (!err) {
            client.publish('presence', 'Hi MQTT from Beau')
        }
    })
})

client.on('message', function(topic, message, req, res) {
    console.log(message.toString())
    res.send(message.toString())
    client.end()
})

app.get('/', function(req, res) {
    res.send('Hello world')
})

app.listen(PORT)