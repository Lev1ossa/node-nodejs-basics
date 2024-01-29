import { rm } from "node:fs/promises";

const remove = async () => {
    try {
      await rm('./src/fs/files/fileToRemove.txt');
      console.log('Success');
    } catch(err) {
      console.error('FS operation failed');
    }
};

await remove();