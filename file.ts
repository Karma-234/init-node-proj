import http from "http";
import file from "fs";
import path from "path";

const hostName: string = "127.0.0.1";
const port: number = 5000;

const server: http.Server = http.createServer(
  (request: http.IncomingMessage, response: http.ServerResponse) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");
    //FS modules: Helps you create/read files and directories
    // Path: This helps you dynamically access files across different platforms.

    file.readFile(
      path.join(__dirname, "data", "note.txt"),
      "utf-8",
      (err, data) => {
        if (err != null) {
          console.log(`Error reading notes: ${err.message}`);
        }
        response.end(
          `<pre>${data.split("\n")[data.split("\n").length - 1]}</pre>`
        );
      }
    );
  }
);
server.listen(port, hostName, () => {
  console.log(`server started at http://${hostName}:${port}`);
});
