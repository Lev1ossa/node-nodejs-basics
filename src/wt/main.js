import { Worker } from 'worker_threads';
import { cpus } from 'os';

const performCalculations = async () => {
  const workers = [];
  const numOfCpu = cpus().length;
  for (let i = 0; i < numOfCpu; i++) {
    workers.push(new Worker('./src/wt/worker.js', { workerData: i + 10 }));
  };

  const resultArr = [];

  Promise.allSettled(workers.map((worker) => 
    new Promise((resolve, reject) => {
        worker.on('message', (data) => {
            resolve({ status: 'resolved', data })
        });

        worker.on('error', () => {
            reject({ status: 'error', data: null })
        });
      })
    )
  ).then((results) => {
      results.forEach((result) => resultArr.push(result.value));
      console.log(resultArr);
    }
  );

};

await performCalculations();