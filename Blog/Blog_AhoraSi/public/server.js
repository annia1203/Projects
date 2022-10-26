const http = require("http"); 
const fs = require("fs"); //file system

const server = http.createServer(function (req, res) {//this function creates the server
    const url = req.url;
    if (url === '/index.js') {

      res.writeHead(200, { 'Content-Type': 'text/js' }); 
      fs.createReadStream(__dirname + "/index.js", "utf8").pipe(res); //this adds the javascript file to the server

    } else{
      res.writeHead(200, { 'Content-Type': 'text/html' }); 
      fs.createReadStream(__dirname + "/index.html", "utf8").pipe(res);//this adds the html file to the server
      }
  })

server.listen(3000, "127.0.0.1"); //This decides on what port the server is on
console.log("Listening to port 3000");// this is to check if the code is working