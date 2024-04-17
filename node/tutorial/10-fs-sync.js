
const {readFileSync, writeFileSync} = require('fs')



const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log(first,second);

writeFileSync('./content/result.txt', `First and second values : ${first}, ${second}`, {flag: 'a'})

console.log(readFileSync('./content/result.txt','utf8'))