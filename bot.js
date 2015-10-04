var spookyEveryWord = require('./')
var config = require('./config')
var Twit = require('twit')
var T = new Twit(config)

var toot = spookyEveryWord()

T.post('statuses/update', {status: toot}, function (err, data, response) {
  console.log(err)
  console.log(data)
})
