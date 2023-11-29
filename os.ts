import http from "http";
import os from "os";
const hostName: string = "127.0.0.1";
const port: number = 5000;

const server: http.Server = http.createServer(
  (request: http.IncomingMessage, response: http.ServerResponse) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");
    //OS modules: Gives the deyails about your sysytem
    let osData = {
      computerName: os.hostname(),
      totalMemory: os.totalmem(),
      freeMemory: os.freemem(),
      homeDirectory: os.homedir(),
      temporyDirectory: os.tmpdir(),
    };
    response.end(`<pre>${JSON.stringify(osData)}<pre>`);
  }
);
server.listen(port, hostName, () => {
  console.log(`server started at http://${hostName}:${port}`);
});
