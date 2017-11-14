#!/usr/bin/env/node

const randomval = require('randomval')

// ------------------------
// Random Bool
// ------------------------
console.log(randomval.randomBool()) //-> true
console.log(randomval.randomBool()) //-> true
console.log(randomval.randomBool()) //-> true


// ------------------------
// Random Date
// ------------------------
console.log(randomval.randomDate()) //-> Mon Apr 24 2017 11:07:02 GMT+0900 (JST)
console.log(randomval.randomDate()) //-> Wed Sep 07 2016 08:58:57 GMT+0900 (JST)
console.log(randomval.randomDate()) //-> Tue Jul 18 2017 15:21:17 GMT+0900 (JST)


// ------------------------
// Random Hash
// ------------------------
console.log(randomval.randomHash()) //-> 01b81a6d51e84d8482dd383f15606ec6
console.log(randomval.randomHash()) //-> ad9088ebabbf45a3b485a00c1b78f0eb
console.log(randomval.randomHash()) //-> 6dca8b28bd1a4aecbd55439caf4549a0


// ------------------------
// Random Int
// ------------------------
console.log(randomval.randomInt()) //-> 7340098251105779
console.log(randomval.randomInt()) //-> -7515362595514803
console.log(randomval.randomInt()) //-> 3472785748516295


// ------------------------
// Random
// ------------------------
console.log(randomval.random()) //-> 0.17590951881617833
console.log(randomval.random()) //-> 0.36765825841641964
console.log(randomval.random()) //-> 0.17532825021839904


