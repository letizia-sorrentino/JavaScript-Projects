// Star contest
const star = '*';
for (let index = 0; index < 6; index++) {
    console.log('*'.repeat(index));
};

console.log(`
* 
** 
*** 
**** 
*****
`);

//Fizzbuzz

for (let i = 1; i < 16; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
        console.log('Fizz')
    }
    else if (i % 5 === 0 && i % 3 !== 0) {
        console.log('Buzz')
    }

    else if (i % (3 * 5) === 0) {
        console.log('FizzBuzz')
    }

    else {
        console.log(i);
    }
}

//Better solution (the order matters!)
for (let i = 1; i < 16; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz')
    }
    else if (i % 3 === 0) {
        console.log('Fizz')
    }

    else if (i % 5 === 0) {
        console.log('Buzz')
    }

    else {
        console.log(i);
    }
}

// Best solution (string concatenation approach)

for (let i = 1; i < 16; i++) {
    let result = '';

    if (i % 3 === 0) {
        result += 'Fizz';
    }
    if (i % 5 === 0) {
        result += 'Buzz';
    }

    console.log(result || i);
}

// Solution using ternaries

for (let i = 1; i < 16; i++) {
    let result = '';
    function fizzBuzz() {
        return i % 3 === 0 ? result += 'Fizz'
            : i % 5 === 0 ? result += 'Buzz'
                : result || i;
    }
}

// Ultimate solution
for (let i = 1; i < 16; i++) {
    let result = '';
    result += i % 3 === 0 ? 'Fizz' : '';
    result += i % 5 === 0 ? 'Buzz' : '';
    console.log(result || i);
}

//Very complicated solution
for (let i = 0; i < 16; )
  console.log(++i % 3 ? "" : "fizz") + (++i % 5 ? "" : "buzz" || i);