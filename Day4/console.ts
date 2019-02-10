export function read() :Promise<string>
{
    var readline = require('readline');
    var rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: false
    });

    return new Promise(function(resolve, reject) {

        rl.on('line', function(line){
            resolve(line);
            rl.close();
        });
        

      });
}