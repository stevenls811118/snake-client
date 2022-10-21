const net = require("net");
const {IP, PORT, NAME} = require('./constants');

const connect = () => {

  console.log("Connecting...");

  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log('Connected to server');
    conn.write(`Name: ${NAME}`);
  });

  conn.on("data", (serverData) => {
    console.log(serverData);
  });
  
  
  return conn;
};

module.exports = {connect};