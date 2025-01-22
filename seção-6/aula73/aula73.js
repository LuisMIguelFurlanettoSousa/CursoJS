const produto = {nome: 'caneca', preco: 1.8};
const outraCoisa = {
    ...produto,
    material: 'mato'
};

// outraCoisa.nome = 'beterraba';
// console.log(produto);
// console.log(outraCoisa);
Object.freeze(produto); // congelo o objeto nn posso alterar mais nada
console.log(Object.keys(outraCoisa));

Object.defineProperty(outraCoisa, 'material', {
    writable: false,
    configurable: false,
    value: 'mato de beterraba'
})


console.log(Object.getOwnPropertyDescriptor(outraCoisa, 'material'))

console.log(Object.values(produto), '\n');

for (let [chave, valor] of Object.entries(outraCoisa)) {
    console.log(chave, valor);
}