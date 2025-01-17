const { PythonShell } = require('python-shell');
const path = require('path');

class PythonBridge {
  constructor(scriptName) {
    this.options = {
      mode: 'json',
      pythonPath: 'python3',
      scriptPath: path.join(__dirname, '../python'),
      args: []
    };
    this.scriptName = scriptName;
  }

  async execute(data) {
    return new Promise((resolve, reject) => {
      const pyshell = new PythonShell(this.scriptName, this.options);

      pyshell.send(data);

      pyshell.on('message', (message) => {
        if (message.error) {
          reject(new Error(message.error));
        } else {
          resolve(message);
        }
      });

      pyshell.on('stderr', (stderr) => {
        console.error('Python stderr:', stderr);
      });

      pyshell.on('error', (err) => {
        reject(new Error(`Python script error: ${err}`));
      });

      pyshell.end((err) => {
        if (err) reject(new Error(`Python script failed: ${err}`));
      });

      // Set timeout
      setTimeout(() => {
        pyshell.terminate();
        reject(new Error('Python script timeout after 30 seconds'));
      }, 30000);
    });
  }
}

module.exports = PythonBridge;