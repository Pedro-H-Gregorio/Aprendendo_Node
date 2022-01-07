let StringDecoder = require("string_decoder").StringDecoder;
let decoder = new StringDecoder("utf-8");

let euro = new Uint8Array([0xe2, 0x82]);
let euro2 = new Uint8Array([0xac]);

console.log(decoder.write(euro));
console.log(decoder.write(euro2));

console.log(euro2.toString());
console.log(euro.toString());

let buff = new Buffer(3);
buff.write("$", "utf-8");

console.log(buff.length);
