const https = require('https');
const fs = require('fs');

const WebSocket = require('ws');

const server = https.createServer({
  cert: fs.readFileSync('./cert.pem'),
  key: fs.readFileSync('./key.pem')
});

const wss = new WebSocket.Server({ server });
const PORT = 8090;


wss.on('connection', function connection(ws) {
  ws.on('message', function message(msg) {
    console.log(msg.toString());
    ws.send(msg.toString())
  });
  ws.send('You have connected to WSS sample echo websocket');
});


server.listen(PORT, function listening() {
  //
  // If the `rejectUnauthorized` option is not `false`, the server certificate
  // is verified against a list of well-known CAs. An 'error' event is emitted
  // if verification fails.
  //
  // The certificate used in this example is self-signed so `rejectUnauthorized`
  // is set to `false`.
  //
  const ws = new WebSocket(`wss://localhost:${server.address().port}`, {
    rejectUnauthorized: false
  });

  ws.on('open', function open() {
    ws.send('Echo websocket started! at wss://localhost:' + PORT);
  });
});