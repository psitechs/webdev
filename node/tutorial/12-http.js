const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === '/'){
    res.write('Welcome to our home page!')

  }
   else if (req.url === '/about'){
    res.write('This what we about')
  }
  else {res.write(`<h1> Oops!</h1>
  <p> We can't find it!</p>
  <a href="/">Go HOME</a>`)}
});

server.listen(5000);
