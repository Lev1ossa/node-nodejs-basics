import { readFile } from "node:fs/promises";

const read = async () => {
    try {
      const container = await readFile('./src/fs/files/fileToRead.txt', { encoding: 'utf8' });
      console.log(container);
    } catch(err) {
      console.error('FS operation failed');
    }
};

await read();