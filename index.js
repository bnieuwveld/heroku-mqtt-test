const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://test.mosquitto.org')

client.on('message', function(topic, message) {
    console.log(message.toString())
    client.end()
})