console.log('🕒 Starting IronKid . . .');
const path = require('path');
const { spawn } = require('child_process');
require('utils-mf/lib/__on.js')();
const start = () => {
   const args = [path.join(__dirname, 'main.js'), ...process.argv.slice(2)];   
   const argv = spawn(process.argv[0], args, {
      stdio: ['inherit', 'inherit', 'inherit', 'ipc']
   })
   .on('message', data => {
      if (data == 'reset') {
         console.log('🕒 Restarting Ironkid . . .')
         argv.kill(), delete argv;
      }
      if (data == 'uptime') {         
         argv.send(process.uptime());         
      }
   })
   .on('exit', code => {
      console.error('Exited with code:', code);
      argv.kill(), delete argv, start();
   });
};
start();