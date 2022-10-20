const {connect} = require('./client');

connect();

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => {
    if (key === '\u0003') {
      process.exit();
    }
    process.stdout.write(key);
  });
  return stdin;
};

setupInput();