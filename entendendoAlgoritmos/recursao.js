// function fibonachi(num) {
//     if( num === 1 ) {
//         return 0
//     } else if (num === 2) {
//         return 1
//     }
//     return fibonachi( num - 1 ) + fibonachi( num - 2 )
// }

// console.log(fibonachi(5))

function fat(num) {
    if (num === 1) return 1
    return num * fat(num - 1)
}

console.log(fat(5))