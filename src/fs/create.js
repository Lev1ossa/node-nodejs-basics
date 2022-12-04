import { writeFile } from "node:fs/promises";

const create = async () => {
    try {
      const flag = 'wx';
      await writeFile('./src/fs/files/fresh.txt', 'I am fresh and young', { flag });
      console.log('Success');
    } catch(err) {
      console.error('FS operation failed');
    }
};

await create();