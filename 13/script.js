// 'use strict';

// const storage = localStorage;

// const input = document.querySelector('input');    // input要素
// const output = document.getElementById('output'); // div#output要素
// const submit = document.getElementById('submit'); // button#submit要素

// const ul = document.createElement('ul');
// output.appendChild(ul);

// const remove = document.createElement('button');
// remove.textContent = 'ストレージデータを削除';
// document.body.insertBefore(remove, output.nextElementSibling);

// let listItems = [];

// // ［記録］ボタンを押したら…
// submit.addEventListener('click', () => {
// //   output.textContent = input.value;
// //   storage.store = input.value;

//     const li = document.createElement('li');
//     li.textContent = input.value;
//     ul.appendChild(li);

//     listItems.push(input.value);
//     storage.store = JSON.stringify(listItems);

//     input.value = '';
// });

// document.addEventListener('DOMContentLoaded', () => {
// //   if (storage.store != undefined) {
// //     const storagedData = storage.store;
// //     output.textContent = storagedData;
// //   } else {
// //     output.textContent = 'ここに内容を表示します';
// //   }
//     if (storage.store != undefined) {
//         listItems = JSON.parse(storage.store);  // JSON → 配列
//     }
// });

// remove.addEventListener('click', () => {
//     delete storage.store;
//     output.textContent = '';
// })

// const link = document.createElement('button');
// link.textContent = '別ページへ飛ぶ';
// document.body.insertBefore(link, remove);

// link.addEventListener('click', () => {
//     location.href = 'page.html';
// });



'use strict';

const storage = localStorage;

const input = document.querySelector('input');
const output = document.getElementById('output');
const submit = document.getElementById('submit');

const ul = document.createElement('ul');
output.appendChild(ul);

let listItems = [];

document.addEventListener('DOMContentLoaded', () => {
  if (storage.store != undefined) {
    listItems = JSON.parse(storage.store);
  }

  for (const item of listItems) {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
  }
});

submit.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = input.value;
  ul.appendChild(li);

  listItems.push(input.value);
  storage.store = JSON.stringify(listItems);

  input.value = '';
});

const remove = document.createElement('button');
remove.textContent = 'ストレージデータを削除';
document.body.insertBefore(remove, output.nextElementSibling);

remove.addEventListener('click', () => {
  delete storage.store;
  ul.textContent = '';
  listItems = [];
});