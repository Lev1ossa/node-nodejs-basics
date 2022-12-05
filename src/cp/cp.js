import { spawn } from 'node:child_process';

const spawnChildProcess = async (args) => {
  const childProcess = spawn('node', ['./src/cp/files/script.js', ...args]);

  process.stdin.pipe(childProcess.stdin);

  childProcess.stdout.on('data', (data) => {
    console.log(`Received from child process: ${data}`);
  });

  childProcess.on('error', (error) => {
    console.error(error);
  });

  childProcess.on('close', (code) => {
    console.log(`Child process exited with code ${code}`);
  });

};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['someArgument1', 'someArgument2', 'someArgument3']);
