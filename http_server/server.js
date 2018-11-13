const http = require('http');

http.createServer(function (req, res) {
  const url = req.url;
  if (url === '/html') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Hello World!<h1>');
    res.end();
  }
  else {
    res.write('Hello World!'); //write a response
    res.end(); //end the response
  }
}).listen(3000, function(){
  console.log("server started at port 3000");
});
