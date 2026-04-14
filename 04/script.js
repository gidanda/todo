'use strict'

for (let i = 0; i < 5; i += 1){
    console.log('Hello World!');
}

for (let a = 1; a <= 9; a += 1) {
  for (let b = 1; b <= 9; b += 1) {
    console.log(`${a} × ${b} = ${a * b}`);
  }
}
    
for (let num = 1; num <= 10; num += 1){
    if (num % 5 == 0){
        break;
    }
    console.log(num);
}
console.log('for文から抜けました!');

for (let num = 1; num <= 10; num += 1){
    if (num % 5 == 0){
        continue;
    }
    console.log(num);
}
console.log('5の倍数は飛ばされました');

for (const data of [1, 'dog', 3]){
    console.log(data);
}

const element = document.createElement('p');
element.textContent = 'Hello World!';
document.body.appendChild(element);
console.log(element);

const ul = document.getElementById('list');
for (let i = 0; i < 5; i += 1){
    const li = document.createElement('li');
    li.textContent = `子要素${i}号`;
    ul.appendChild(li);
}