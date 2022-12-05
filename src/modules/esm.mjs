import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import c from './files/c.js';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';


const random = Math.random();
const cb = (err, data) => {
  if (err) throw err;
}; 

let unknownObject;

if (random > 0.5) {
    unknownObject = JSON.parse(readFileSync('./src/modules/files/a.json', cb));
} else {
    unknownObject = JSON.parse(readFileSync('./src/modules/files/b.json', cb));
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

const filePath = fileURLToPath(import.meta.url);

console.log(`Path to current file is ${filePath}`);
console.log(`Path to current directory is ${path.dirname(filePath)}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export {
    unknownObject,
    myServer,
};

