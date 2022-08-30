const other = require('./other');



// const res = other.substract(5,4);
// console.log(res);
// console.log(other);

const http = require('http');

const server = http.createServer((req,res)=>{
    // res.end('Hello node js ');
    // console.log(req.url);
    if(req.url=='/'){
        res.writeHead(200,{'Content-Type':'application/json'});
        res.write(JSON.stringify({course:"ACC"}))
        res.end()
    }
    else if(req.url=='/contact'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<p>This is contact page</p>')
        res.end()
    }
    else if(req.url=='/about-us'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<p>This is aboust us page</p>')
        res.end()
    }
})
// console.log(server);
const PORT = 5000;
server.listen(PORT);
console.log(`server created at ${PORT}`);

