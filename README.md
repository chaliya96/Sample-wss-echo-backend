# Sample-wss-echo-backend
A sample backend with websocket secured echo endpoint

# Installation
Clone the repository and run npm install

```
git clone https://github.com/chaliya96/Sample-wss-echo-backend
npm install
```
Creating the key and certificate pem files. 
```
openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 100 -nodes
```
Starting the server.
```
npm start
```

The server will run on port 8090. You can change this by editing index.js.
