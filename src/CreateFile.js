const fs = require('fs');
const path = require('path')
const files = require('./files');

class CreateFile {
  create(filename, content) {
    if(!fs.existsSync(path.join(__dirname, '..', 'data'))) {
      fs.mkdirSync(path.join(__dirname, '..', 'data'));
    }

    if(!fs.existsSync(path.join(__dirname, '..', 'data', filename + ' folder'))){
      fs.mkdirSync(path.join(__dirname, '..', 'data', filename + ' folder'))
    }

    if(!fs.existsSync(path.join(__dirname, '..', 'data', filename + ' folder', filename +'.txt'))) {
      try {
        fs.writeFileSync(path.join(__dirname, '..', 'data', filename + ' folder', filename +'.txt'), content)
        files.push(filename);
      } finally {
        console.log('File created!')
      }
    } else {
      console.log('File already exists')
      return;
    }

  }
}
module.exports = new CreateFile();
