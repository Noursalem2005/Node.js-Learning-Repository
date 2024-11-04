const path = require('path');
const pathObj = {
    dir: path.dirname(__filename),
    base: path.basename(__filename),
    ext: path.extname(__filename),
    name: path.basename(__filename, path.extname(__filename))
};
console.log(pathObj);