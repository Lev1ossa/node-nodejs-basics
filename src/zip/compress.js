import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';

const compress = async () => {
  const readStream = createReadStream('./src/zip/files/fileToCompress.txt');
  const writeStream = createWriteStream('./src/zip/files/archive.gz');
  
  readStream.pipe(createGzip()).pipe(writeStream);
};

await compress();