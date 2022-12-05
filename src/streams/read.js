import {createReadStream} from 'fs';

const read = async () => {
  const readStream = createReadStream('./src/streams/files/fileToRead.txt');
  readStream.on('data', (data) => {
    process.stdout.write(data + '\n');
  });
};

await read();