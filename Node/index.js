const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile(
      path.join(__dirname, "public", "index.html"),
      (err, dataContent) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(dataContent);
      }
    );
  }

//   if (req.url === "/about") {
//     fs.readFile(
//       path.join(__dirname, "public", "about.html"),
//       (err, dataContent) => {
//         if (err) throw err;
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(dataContent);
//       }
//     );
//   }

if(req.url === '/api/users') {
    const user = [
        {name : 'niis', age: 09},
        {name: 'kdied', age: 08}
    ];
    res.writeHead(200, { 'Content-type': 'application/json'});
    res.end(JSON.stringify(user));     
}
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`server running ${PORT}`));
