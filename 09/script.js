// 'use strict';

// console.log('Hello World!!');

// // const p = document.getElementById('p_id');
// // console.log(`p要素のidは ${p.id} です`);

// const a = document.getElementById('link');
// const img = a.firstElementChild;

// console.log(`元のリンクURL: ${a.href}`);
// a.href = 'https://loremflickr.com/320/240/dog';

// console.log(`元の画像ソース: ${img.src}`);
// img.src = 'https://loremflickr.com/320/240/dog';

// let textNode;

// if (a.target == '_blank'){
//     textNode = document.createTextNode('別のタブで開きます');
// }else{
//     textNode = document.createTextNode('同じタブで開きます');
// }

// const br = document.createElement('br');

// const p = document.querySelectorAll('p')[1];
// console.log(p.className);
// p.className = 'new_class';
// p.appendChild(br);
// p.appendChild(textNode);
// console.log(a.target);
// // a.removeAttribute('target');

// const attrs = a.attributes;
// for (const attr of attrs){
//     console.log(attr);
// }

const p = document.getElementById('p_id');

console.log(p.className);

p.className = 'my_style';

const flag = window.prompt('A, B, or C');

p.className = 'baseStyle';

if (flag == 'A') {
  p.className += ' p_class';
} else if (flag == 'B') {
  p.className += ' myStyle';
}