// const other = require('./other');
// const res = other.substract(5,4);
// console.log(res);
// console.log(other);

const http = require('http');
// const { url } = require('inspector');
const  url  = require('url');

const server = http.createServer((req,res)=>{
    // res.end('Hello node js ');
    // console.log(req.url);
    // ------------------------------
    // if(req.url=='/'){
    //     res.writeHead(200,{'Content-Type':'application/json'});
    //     res.write(JSON.stringify({course:"ACC"}))
    //     res.end()
    // }
    // else if(req.url=='/contact'){
    //     res.writeHead(200,{'Content-Type':'text/html'});
    //     res.write('<p>This is contact page</p>')
    //     res.end()
    // }
    // else if(req.url=='/about-us'){
    //     res.writeHead(200,{'Content-Type':'text/html'});
    //     res.write('<p>This is aboust us page</p>')
    //     res.end()
    // }
    // ------------------
    const address_url = 'https://localhost:5000/contact?name=mezba&country=bangladesh';

    const parsed_url = url.parse(address_url,true);
    const queryObject = parsed_url.host;
    console.log(queryObject);
    console.log(parsed_url);

})
// console.log(server);
// console.log(url);
const PORT = 5000;
server.listen(PORT);
console.log(`server created at ${PORT}`);

/*
/contact?name=arman

*/