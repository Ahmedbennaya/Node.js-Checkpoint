const http = require('http');

// Create HTTPserver
const server = http.createServer((req, res) => {

  res.writeHead(200, {'Content-Type': 'text/html'});

  // Send  response body
  res.end('<h1>Hello Node!!!!</h1>');
});

// port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
