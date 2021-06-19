const lnk = (async) => (expName) => {
  const { spawn } = require("child_process");

  // const childpython = spawn('python' , ['--version']);
  // const childpython = spawn('python' , ['link.py']);
  const childpython = spawn("python", ["link.py", "newtons law" + "practical"]);
  // const x = null;
  childpython.stdout.on("data", (data) => {
    console.log(`${data}`);
    // console.log(x);
  });
  childpython.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
  });

  childpython.on("close", (code) => {
    // console.log(`child process exited with code ${code}`);
  });
  // module.exports = x;
};

module.exports = lnk;
