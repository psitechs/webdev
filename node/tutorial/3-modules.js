// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share min)
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')

require('./7-mind-grenade')

sayHi('Francisco')
sayHi(names.john)
sayHi(names.peter)