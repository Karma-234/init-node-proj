import http from "http";
const hostName: string = "127.0.0.1";
const port: number = 5000;
const server: http.Server = http.createServer(
  (request: http.IncomingMessage, response: http.ServerResponse) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");
    response.end(
      `<h3 style = "font-family: sans-serif; color: green; position: relative; text-align: center">Welcome to the initial server</h3>`
    );
  }
);
server.listen(port, hostName, () => {
  console.log(`server started at http://${hostName}:${port}`);
});
