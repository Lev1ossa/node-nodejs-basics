const parseArgs = () => {
    const argsArr = process.argv.slice(2);
    const resulArr = [];
    // console.log(argsArr);
    argsArr.forEach((item, idx) => {
      if (idx % 2 == 0){
        resulArr.push(`${argsArr[idx]} is ${argsArr[idx + 1]}`);
      }
    })
    console.log(resulArr.join(', '));
};

parseArgs();