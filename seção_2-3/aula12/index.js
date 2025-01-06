let stra = 'a' //b
let strb = 'b' //c
let strc = 'c' //a

const strAtemp = stra
stra = strb
strb = strc
strc = strAtemp

console.log(stra, strb, strc)