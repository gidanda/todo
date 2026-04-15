// 'use strict';

// console.log('Hello World!!');

// const array = [1, 2, 'dog', 1, 2, 'cat'];

// console.log(array[0]); // → 1
// const animal = array[2];
// console.log(animal); // → dog!
// array[3] = 'pig!';   // arrayの“要素”は定数ではないので代入可
// array[4] += array[0];
// console.log(array); // → [1, 2, 'dog!', 'pig!', 3, 'cat!']

// // array = [1, 2, 3, 'dah', '!!'];

// for (let i = 0; i < array.length; i += 1){
//     console.log(array[i]);
//     array[i] = i;
// }
// console.log(array.length);

// const num = [1, 2, 3];
// for (const el of num){
//     console.log(el);
// }

// array[array.length] = 'end';
// console.log(array);

// const ar = [1, 2, 3];
//   // → 3
// const tail = ar.pop();
// console.log(tail);

// let head = ar.shift();
// console.log(head);

// ar.splice(1, 0, 3);
// console.log(ar);
// ar.splice(1, 0, 2.5)
// console.log(ar);
// ar.splice(0, 1);
// console.log(ar);
// const index = ar.indexOf(3);
// console.log(index);


// array.pop();
// array.shift();
// console.log(array);

// const newarray = array.map((el) => el + '号');
// console.log(newarray);

// const newar = ar.filter((el) => el >= 3);
// console.log(newar);

'use strict'

const etoList = ['ネズミ', 'ウシ', 'トラ', 'ウサギ'];

const ul = document.getElementById('list');

for (const eto of etoList){
    const li = document.createElement('li');
    li.textContent = eto;
    ul.appendChild(li);
}

const numList = [1, 2, 3, 4, 5, 6, 7, 8];

const evennum = numList.filter((num) => num % 2 == 0).map((even) => 'No' + even)
for (const num of evennum){
    const li = document.createElement('li');
    li.textContent = num;
    ul.appendChild(li);
}