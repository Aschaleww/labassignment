const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res) {
  const filePath = './example.pdf';
  const stat = fs.statSync(filePath);

  res.writeHead(200, {
    'Content-Type': 'application/pdf',
    'Content-Length': stat.size
  });

  const readStream = fs.createReadStream(filePath);
  readStream.pipe(res);
});

server.listen(5000, function() {
  console.log('Server is listening on port 5000');
});
