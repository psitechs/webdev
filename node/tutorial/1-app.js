// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

//package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step)
// npm init -y (everything default)

const _ = require("lodash");

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);

console.log('heBGPROPERLY1e');


const { readFile } = require ('fs');
const { log } = require("console");

console.log('started a first task')
//Check file path!
readFile('./content/first.txt','utf8',(err,result) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(result)
  console.log('Completed first task')
})
console.log('starting next task')

const http = require('http')

const server = http.createServer((req,res)=> {
  console.log('request event');
  res.end('Hello World')
})

server.listen(5000, () => {
  console.log('server listening on port: 5000')
})