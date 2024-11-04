const fs = require('fs');
const first = fs.readFileSync('./content/sub-folder/first.text', 'utf8');
console.log(first);

const second = fs.writeFileSync('./content/sub-folder/second.text', `Hello World here is the result ${first} `);
// ayncrhous method
const third = fs.readFileSync('./content/sub-folder/second.text', 'utf8');
// synchronous method

// const third = fs.readFile('./content/sub-folder/second.text', 'utf8', (err, result) => {     
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(result);
// });

console.log(third);

// fs.mkdir('./content/sub-folder', { recursive: true }, (err) => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('Folder created');
// });

// so fs is used to read and write files, create and delete files and folders, watch files and folders for changes, etc.
// fs.readdir('./content', (err, files) =>