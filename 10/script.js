'use strict';

const button = document.querySelector('button');
console.log(button);

// button.addEventListener('click', () => {
//     const p = document.getElementById('target');
//     p.classList.toggle('myStyle');
// });

// button.addEventListener('click', () => {
//   const p = document.getElementById('target');
//   p.classList.toggle('newStyle');
// });

// button.addEventListener('mouseenter', () => {
//   const p = document.getElementById('target');
//   p.style.fontSize = '1.5em';
// });

// button.addEventListener('mouseleave', () => {
//   const p = document.getElementById('target');
//   p.style.fontSize = '1em';
// });

// const p = document.getElementById('target');

// button.addEventListener('click', () => p.classList.toggle('myStyle'));
// button.addEventListener('click', () => p.classList.toggle('newStyle'));
// button.addEventListener('mouseenter', () => p.style.fontSize = '1.5em');
// button.addEventListener('mouseleave', () => p.style.fontSize = '1em');

const img = document.querySelector('img');

img.addEventListener('click', (ev) => {
    img.src = 'https://github.com/ugok-girls.png';
    console.log(ev.clientX, ev.clientY);
    const p = document.createElement('p');
    p.textContent = `X:${ev.offsetX} Y:${ev.offsetY}`;
    document.body.insertBefore(p, img.nextElementSibling);
});

window.addEventListener('resize', () => {
  const p = document.getElementById('target');
  p.style.backgroundColor = 'gold';
});

const a = document.createElement('a');
a.href = 'https://zenn.dev/ojk';
a.textContent = 'リンク先に飛びます';

const script = document.querySelector('script');
document.body.insertBefore(a. script);