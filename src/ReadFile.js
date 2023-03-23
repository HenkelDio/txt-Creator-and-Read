const fs = require('fs');
const path = require('path');

class ReadFile {
  read(filename) {
    if(!fs.existsSync(path.join(__dirname, '..', 'data', filename + ' folder'))) {
      console.log('File not exists');
      return;
    } else {
      const data = fs.readFileSync(path.join(__dirname, '..', 'data', filename + ' folder', filename + '.txt'), { encoding: 'utf-8', flag: 'r'});
      console.log(data);
    }
  }
}

module.exports = new ReadFile();