const net = require("net");
/* const readline = require("readline");

// create interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const name = () => {
  let name = "";

  rl.question("What is your name\n", (input) => {
    name = input.slice(0, 3);
    console.log(`Your name is: ${name}`);
    rl.close();
  });
  return name;
}; */

const connect = () => {

  console.log("Connecting...");

  let name = 'Syf';

  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log('Connected to server');
    conn.write(`Name: ${name}`);
  });

  conn.on("data", (serverData) => {
    console.log(serverData);
  });
  
  
  return conn;
};

module.exports = {connect};