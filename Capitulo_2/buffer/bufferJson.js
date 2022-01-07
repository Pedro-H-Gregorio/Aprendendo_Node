let Buffer = require("buffer").Buffer;

// String para buffer
let buf = new Buffer("Este é um exemplo");
let json = JSON.stringify(buf);
// buffer para json
let buf2 = new Buffer(JSON.parse(json));
console.log(buf2.toString());
