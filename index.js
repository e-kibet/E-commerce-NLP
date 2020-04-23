// index.js
var natural = require('natural');

var tokenizer = new natural.WordTokenizer();

natural.PorterStemmer.attach();

console.log(tokenizer.tokenize("The quick brown fox jumps over the lazy dog"));

console.log("I can see that we are going to be friends".tokenizeAndStem());