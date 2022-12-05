import {createReadStream} from 'fs';
import {createHash} from 'crypto';

const calculateHash = async () => {
  const hash = createHash('sha256');
  const readStream = createReadStream('./src/hash/files/fileToCalculateHashFor.txt');

  // readStream.pipe(hash).setEncoding('hex').pipe(process.stdout);

  readStream.on('readable', () => {
    const data = readStream.read();
    if (data)
      hash.update(data);
    else {
      console.log(hash.digest('hex'));
    }
  });
};

await calculateHash();