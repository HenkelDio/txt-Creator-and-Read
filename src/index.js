const CreateFile = require('./CreateFile');
const ReadFile = require('./ReadFile');
const readline = require('node:readline/promises');
const files = require('./files');

const createFile = CreateFile.create;
const readFile = ReadFile.read;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function CreateAndReadFile() {
  const answer = await rl.question('Hello, do you want to Create(C) or Read(R) a file?\n');
  
  if (answer === 'c' || answer === 'C') {
    const filename = await rl.question('Ok, which name do you want to put on the file?\n');
    const content = await rl.question('And write content to read there!\n');
    createFile(filename, content); 
  }

  if(answer === 'r' || answer === 'R') {
    console.log(`
    ------------------
    File list: ${files}
    ------------------
    `);
    const filename = await rl.question('Which file do you want to read?\nType the name\n');
    console.log('------------------------------------');
    readFile(filename);
  }

  console.log('------------------------------------');
  const redo = await rl.question('Do you want to do another action?\n(Y)es or (N)ot?\n');
  if(redo === 'Y' || redo === 'y') {
    CreateAndReadFile();
  } else if (redo === 'n' || redo === 'N') {
    console.log('Ok, good bye!');
    rl.close();
    return;
  }

}

CreateAndReadFile();