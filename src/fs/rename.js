import fsPromises from "node:fs/promises";

const rename = async () => {
    try {
     await fsPromises.appendFile('./src/fs/files/properFilename.md', '', {flag: 'r'});
     console.error('FS operation failed');
    } catch(err) {
      try {
        await fsPromises.rename('./src/fs/files/wrongFilename.txt', './src/fs/files/properFilename.md');
        console.log('Success');
      } catch(err) {
        console.error('FS operation failed');
      }
    }
};

await rename();