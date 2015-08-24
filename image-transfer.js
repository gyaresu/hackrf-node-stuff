var devices = require('hackrf-stream')
var fs = require('fs')

var radio = devices(0).open(0)

radio.setFrequency(9.15e8)

radio.setSampleRate(3.7e6)

var tx = radio.createWriteStream()

fs.readFile('./gareth.raw', function (err, data) {
  if (err) {
    throw err
  }
  tx.write(data)
})
