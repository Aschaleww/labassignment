const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const filePath = 'path/file.pdf'; // Specify the path to your PDF file

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('File not found');
    } else {
      res.writeHead(200, { 'Content-Type': 'application/pdf' });
      res.end(data);
    }
  });
});

const port = 3000; // Specify the port number you want to use

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});