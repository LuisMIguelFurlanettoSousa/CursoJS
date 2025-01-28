const pessoas = [
    {id: 3, nome: 'luis'},
    {id: 2, nome: 'julia'},
    {id: 1, nome: 'sla'},
]

// const novasPessoas = {};
// for(const pessoa of pessoas) {
//     const { id } = pessoa;
//     novasPessoas[id] = { ... pessoa};
// }
const novasPessoas = new Map();
for(const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ... pessoa});
}

console.log(novasPessoas);