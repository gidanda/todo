'use strict';

console.log('Hello World!!');

const lis = document.querySelectorAll('li');

const lisArray = Array.from(lis);  // NodeListを配列に変換
const newLis = lisArray.map((li) => li.textContent + '!!');
console.log(newLis);

const a = document.getElementById('link');
console.log(a);

const p = a.parentElement;
console.log(p);

const img = a.firstElementChild;
console.log(img);