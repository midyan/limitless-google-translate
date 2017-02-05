var limitless = require('./engine.js')

limitless.translate(process.argv[2], 'pt')
.then( (result) => {
  console.log( result )
})
.catch( (err) => {
  console.log( new Error(err) )
})
