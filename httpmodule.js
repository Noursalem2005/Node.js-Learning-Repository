const http = require('http');

const server = http.createServer((req,res) => {
    res.end('Hello World');
});
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});



const server5023 = http.createServer((request,response) => { 
    console.log(`Method: ${request.method}`);
    console.log (`url: ${request.url}`);
    console.log(`headers: ${request.headers}`);
    
request.on('data', (chunk) => {
        console.log(`Data: ${chunk}`);
    });
    request.on('end', () => {
        console.log('No more data');
    });

    response.end('Hello World');
});


server5023.listen(5023,() => {
    console.log('Server is running on port 5023');
});