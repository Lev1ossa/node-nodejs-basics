import { readdir } from "node:fs/promises";

const list = async () => {
    try {
      const files = await readdir('./src/fs/files');
      console.log(files);
      // files.forEach(item => console.log(item));
    } catch(err) {
      console.error('FS operation failed');
    } 
};

await list();