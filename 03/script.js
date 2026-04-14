'use strict';

const bmi = window.prompt('BMIの値を入力してください');
const p_element = document.querySelector('p');
p_element.textContent = `あなたのBMIは${bmi}：`;

if (bmi > 25) {
  p_element.textContent += '肥満です';
} else if (bmi < 18.5) {
  p_element.textContent += '低体重です';
} else {
  p_element.textContent += '適正体重です';
}

const num1 = 10;
const num2 = 5;

if (num1 >= num2){
    console.log('num1はnum2以上の数です');
}

const num = 10;
const strnum = '10';

if (num == strnum){
    console.log('数値の１０と文字列の１０は等しい');
}
