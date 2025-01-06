function fizzbuzz(n) {
    if (typeof n !== 'number') return n;

    const div3 = n % 3 === 0;
    const div5 = n % 5 === 0;

    if (div3 && div5) return 'FizzBuzz';
    if (div3) return 'Fizz';
    if (div5) return 'Buzz';
    return n
}

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzbuzz(i));
}
