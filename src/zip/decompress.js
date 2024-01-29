import { createReadStream, createWriteStream } from 'fs';
import { createUnzip } from 'zlib';

const decompress = async () => {
  const readStream = createReadStream('./src/zip/files/archive.gz');
  const writeStream = createWriteStream('./src/zip/files/fileToCompress.txt');
  
  readStream.pipe(createUnzip()).pipe(writeStream); 
};

await decompress();