// Your code here
const http = require("http");

const responseBody = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World!</title>
  </head>
  <body>
    <h1>Hello there!</h1>
  </body>
  </html>
`;

const server = http.createServer((req, res) => {
  console.log("REQ: ", req);
  console.log("RES: ", res);

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/css");
  res.end(responseBody);
});

const port = 5001;

server.listen(port, () => console.log("Server is listening on port", port));
