var tap = require('tap')

var spookyEveryWord = require('./')

tap.test('does the thing', function (t) {
  t.plan(1)
  t.equal(spookyEveryWord('world'), 'hello world', 'does it')
})
