// 'use strict';

// const p = document.getElementById('output'); // 出力用のp要素

// // ［表示］ボタンを押したら…
// document.querySelector('button').addEventListener('click', () => {
//     const text = document.getElementById('textInput');
//     p.textContent = text.ariaValueMax;
//     p.textContent =  text.value;
  
//     text.value = '入力完了しました';

//     const password = document.getElementById('password');
//     p.textContent = password.value;

//     const radio = document.getElementById('abcRadio');
//     for (const btn of radio){
//         if (btn.checked == true){
//             p.textContent = btn.value;
//         }
//     }
    
//     const checkbox = document.getElementById('abcCheck');
//     const values = [];
//     for (const box of checkbox){
//         if (box.checked ==  true){
//             values.push(box.value);
//         }
//     }
//     p.textContent = values;

//     const select =  document.querySelector('select');
//     p.textContent = select.value;

//     const multiSelect = document.querySelector('select[multiple]');
//     const values = [];
//     for (const opt of multiSelect.options) {
//     if (opt.selected == true) {
//         values.push(opt.value);
//     }
//     }
//     p.textContent = values;
// });



