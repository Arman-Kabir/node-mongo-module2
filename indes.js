// var name = 'phero';

const { name, add } = require('./other');

// core modules
const http = require('http');

// third party module ->
const _ = require('underscore');

const server = http.createServer(function (req, res) {

    //write code here
    console.log(`server is running`);

});

console.log(name);
// const result = add(2, 3);
// console.log(result);

var stooges = [{ name: 'moen', age: 40 }, { name: 'Larry', age: 50 }, { name: 'Curly', age: 60 }];

const res =  _.pluck(stooges,'age');
console.log(res);

