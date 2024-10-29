const fs = require('fs');
const crypto = require('crypto')

setTimeout(() => console.log('Hello from Timer 1'), 0);
setImmediate(() => console.log('Hello from Immediate Fn 1'));

fs.readFile('sample.txt', 'utf-8', () => {
    console.log('IO Polling Finished');
    
    setTimeout(() => console.log('Hello from Timer 2'), 0);
    setTimeout(() => console.log('Hello from Timer 3'), 5 * 1000);
    setImmediate(() => console.log('Hello from Immediate Fn 2'));

    crypto.pbkdf2('password1', 'salti', 100000, 1024, 'sha512', () => {
        console.log('Password 1 Done');
    });
    
    crypto.pbkdf2('password2', 'salt1', 100000, 1024, 'sha512', () => {
        console.log('Password 2 Done');
    });
    
    crypto.pbkdf2('password3', 'salti', 100000, 1024, 'sha512', () => {
        console.log('Password 3 Done');
    });
    
    crypto.pbkdf2('password4', 'salti', 100000, 1024, 'sha512', () => {
        console.log('Password 4 Done');
    });
});

console.log('Hello from Top Level Code');