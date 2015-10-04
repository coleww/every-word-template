var fs = require('fs')
var Twit = require('twit')
var T = new Twit(require('./config'))

var words = require('./words')

var current = ~~(fs.readFileSync('current').toString())
fs.writeFileSync('current', current + 1)

var status = 'SOMETHING ' + words[current]

T.post('statuses/update', {status: status}, function (err, data, response) {
  console.log(err)
  console.log(data)
})
