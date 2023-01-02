const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.time('for-loop');

for (let i = 0; i < arr.length; i++) {}

console.timeEnd('for-loop');

console.time('while-loop');

let j = 0;
while (j < arr.length) {
  j++;
}

console.timeEnd('while-loop');

console.time('forin-loop');

for (let i in arr) {
}

console.timeEnd('forin-loop');



console.time('for-each');

arr.forEach(() => {});

console.timeEnd('for-each');

