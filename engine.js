const google_translate = require('google-translate-api')
const fs = require('fs')
const q = require('q')

/**
  * Analyzes the string input to make sure that no array item has more than 254 characters
  * @method splitString
  * @param  {String}  	string    string to analyse
  * @return {Array}     array2d   2D array with the text
  */
var splitString = (string) => {

  var array = string.split('. ')
  var length = array.length
  var array2d = []

  for( var i = 0; i < length; i++) {
    if( array[i].length >= 254) {
      array[i] = array[i].split(', ')
    } else {
      array[i] = [array[i]]
    }
    array2d[i] =  array[i]
  }

  return array2d

}

/**
  * Translates array of sentences and returns a promise with the translated array as argument
  * @method translateArray
  * @param  {String}  string    	String to be translated
  * @param  {String}  language    Language that the array will be translated to. i.e: 'en' for English, 'fr' for French.
  * @return {Promise}             Returns a promise after it is finished
  */
var translate = (string, options) => {
  var dfd = q.defer()

  var array = splitString(string)

  var translatedArray = array.slice() // Creates copy of array to another part of the memory
  var totalLength = 0
  var amount = 0

  for( var i = 0; i<array.length; i++) {
    totalLength += array[i].length
  }

  array.forEach( (outside, i) => {
    outside.forEach( (inside, j) => {
      google_translate(inside, options).then((res) => {
        translatedArray[i][j] = res.text
        amount++
        if (amount == totalLength) {
          for(var k = 0; k<translatedArray.length; k++) {
            translatedArray[k] = translatedArray[k].join(', ')
          }
          dfd.resolve(translatedArray.join('. '))
        }
      }).catch((err) => {
        dfd.reject(err)
      })
    })
  })

  return dfd.promise
}

module.exports = {
  translate: translate
}
