import os from 'os';
import cluster from 'cluster';

//create the clone of the process
const runPrimaryProcess = () => {
  const cpus = os.cpus().length * 2;
  console.log(`Primary process is running with ${process.pid}`);
  //fork create new process
  for (let i = 0; i < cpus; i++) {
    cluster.fork();
  }
};

//run the code in the server
const runWorkerProcess = async () => {
  await import('./server.js');
};

cluster.isPrimary ? runPrimaryProcess() : runWorkerProcess();
