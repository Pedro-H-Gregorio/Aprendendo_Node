var buf = new Buffer(4);
buf.writeUInt8(0x63, 0);
buf.writeUInt8(0x61, 1);
buf.writeUInt8(0x74, 2);
buf.writeUInt8(0x73, 3);
console.log(buf.toString());

var buf1 = new Buffer("Este é o caminho para contruir nosso buffer");
var lnth = buf1.length;
console.log(buf1.toString());

//Cria um novo buffer como se fosse uma parte do antigo
var buf2 = buf1.slice(18, lnth);
console.log(buf2.toString());

// modificar o segundo buffer
buf2.fill("*", 0, 13);
console.log(buf2.toString());

// Mostra o impacto no primeiro buffer
console.log(buf1.toString());

if (buf1.equals(buf2)) console.log("Os Buffers são iguais");
