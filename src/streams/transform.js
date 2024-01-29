const transform = async () => {
  process.stdin.on('data', (data) => {
    let transformedData = data.toString().split('').reverse().join('');
    process.stdout.write(transformedData + '\n');
  });  
};

await transform();