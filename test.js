var limitless = require('./engine.js')
var fs = require('fs')

fs.readFile('test.txt', 'utf8', (err, data) => {
  limitless.translate(data, {to:'pt'})
  .then( (result) => {
    console.log(result)
  })
  .catch( (err) => {
    console.log( new Error(err) )
  })
})
