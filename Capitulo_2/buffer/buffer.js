/* let buf = new ArrayBuffer(24);
console.log(buf);
// Criando buffer
*/

// com string
/* let str = "New String";
let buf = new Buffer(24);
buf.fill(3);
console.log(buf); */

// Test com buffer e suas propriedades

"Use strict";

let a = [1, 2, 3];
let b = Buffer.from(a);
console.log(b);

let a2 = new Uint8Array([1, 2, 3]);
let b2 = Buffer.from(a2);
console.log(b2);

let b3 = Buffer.alloc(10);
console.log(b3);

let b4 = Buffer.allocUnsafe(10);
console.log(b4);
