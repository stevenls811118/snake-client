let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  //stdin.resume();
  stdin.on("data", (key) => {
    if (key === '\u0003') {
      process.exit();
    } else if (key === 'w') {
      connection.write('Move: up');
    } else if (key === 'a') {
      connection.write('Move: left');
    } else if (key === 's') {
      connection.write('Move: down');
    } else if (key === 'd') {
      connection.write('Move: right');
    } else if (key === 'h') {
      connection.write('Say: Hi');
    } else if (key === 'j') {
      connection.write('Say: What\'s up');
    } else if (key === 'k') {
      connection.write('Say: Ok');
    } else if (key === 'l') {
      connection.write('Say: Bye~');
    }
  });
  return stdin;
};

module.exports = {setupInput};