const { spawn } = require('child_process');

// const childpython = spawn('python' , ['--version']);
// const childpython = spawn('python' , ['link.py']);
const childpython = spawn('python' , ['link.py','newtons law'+'youtube']);


childpython.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});
childpython.stderr.on('data', (data) =>{
    console.error(`stderr: ${data}`);
});

childpython.on('close', (code) =>{
    console.log(`child process exited with code ${code}`);
});
