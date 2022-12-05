import { env } from 'node:process';

const parseEnv = () => {
    // console.log(process.env);
    const varArr = [];
    for (let key in env) {
      if (key.startsWith('RSS_')){
        // console.log(key + '=' + env[key]);
        varArr.push(key + '=' + env[key]);
      }
    }
    console.log(varArr.join('; '));
};

parseEnv();