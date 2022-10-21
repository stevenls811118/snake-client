const {HI, WHAT, OK, BYE, MOVE} = require('./constants');

let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // checking input and send to server
  stdin.on("data", (key) => {
    if (key === '\u0003') {
      process.exit();
    } else if (key === 'w') {
      connection.write(MOVE.w);
    } else if (key === 'a') {
      connection.write(MOVE.a);
    } else if (key === 's') {
      connection.write(MOVE.s);
    } else if (key === 'd') {
      connection.write(MOVE.d);
    } else if (key === 'h') {
      connection.write(HI);
    } else if (key === 'j') {
      connection.write(WHAT);
    } else if (key === 'k') {
      connection.write(OK);
    } else if (key === 'l') {
      connection.write(BYE);
    }
  });
  return stdin;
};

module.exports = {setupInput};