const { spawn } = require('child_process');

async function getDefaultPrinter() {
  return new Promise((resolve, reject) => {
    const python = spawn('python', ['get_default_printer.py']);
    let default_printer = '';

    python.stdout.on('data', (data) => {
      default_printer = data.toString().trim();
      // console.log(default_printer);
    });

    python.on('close', (code) => {
      if (code === 0) {
        resolve(default_printer);
      } else {
        reject(new Error(`Python process exited with code ${code}`));
      }
    });

    python.on('error', (err) => {
      reject(err);
    });
  });
}

module.exports = {
  getDefaultPrinter
};
