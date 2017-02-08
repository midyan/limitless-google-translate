# Limitless Google Translate API for NodeJs
 Translate large texts using the google-translate-api for NodeJS!



### The magic itself:
The google-translate-api uses query string in a GET method to send the text to be translated to the translation service. This limits the amount a characters you can translate at once at 255 per request. This package chops the texts into smaller, coherent sentences, translates them and mount them back together into the text. This is all done asynchronously, so it won't block your code midway!

### The package:
It return an object with a single method: translate. Couldn't be simpler!

# How to install and setup
  Simply run
  ```sh
  $ npm install limitless-google-translate
  ```

  Import it into you project
  ```sh
   var limitless = require('limitless-google-translate')
  ```

  And use it at will!
  ```sh
  limitless.translate(VERY_LARGE_TEXT_HERE, {to: 'pt'})
    .then( (result) => {
      console.log( result )
    })
    .catch( (err) => {
      console.log( new Error(err) )
    })
  ```

## Found a bug or want to improve this somehow?
  Feel free to contact me or submit a pull request. I will be thrilled to help you!
