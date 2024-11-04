const os = require('os');
const currentOs = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
    uptime: os.uptime(),
    userInfo: os.userInfo(),
    cpus: os.cpus(),
    networkInterfaces: os.networkInterfaces()
};
console.log(currentOs);