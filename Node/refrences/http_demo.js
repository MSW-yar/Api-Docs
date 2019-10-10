const http = require('http');

http.createServer((req, res) => {
    res.write('hello jahfoia')
    res.end()
}).listen(5000, () => console.log('server run'))