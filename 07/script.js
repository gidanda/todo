'use strict';

console.log('Hello World!!');

const servants = ['犬', '猿', '雉'];

console.log('現在の家来は：');
for (const servant of servants){
    console.log(servant);
}
console.log(`の総勢${servants.length}名です。`);

function showServants(){
    console.log('現在の家来は：');
    for (const servant of servants){
        console.log(servant);
    }
    console.log(`の総勢${servants.length}名です。`);
}

function appendServants(newcomer){
    servants.push(newcomer);

    console.log('現在の家来は：');
    for (const servant of servants) {
        console.log(servant);
    }
    console.log(`の総勢 ${servants.length} 名です。`);
}

appendServants('鬼');

function swapServants(newcomer){
    servants.push(newcomer);
    const fired = servants.shift();

    console.log('現在の家来は：');
    for (const servant of servants) {
        console.log(servant);
    }
    console.log(`の総勢 ${servants.length} 名です。`);

    return (fired);
}

const retired = swapServants('鬼');
console.log(`${retired}さん、これまでありがとう！`);

function get0bject(){
    return {a: 'A', b: 'B',c: 'C' };
}

const { a: a_value, c: c_value } = get0bject();

console.log(a_value);
console.log(c_value);

const obj = {
    name: 'OJK',
    sayHello(){
        console.log(`Hello ${this.name}`);
    },
    sayHelloTwice(){
        this.sayHello();
        this.sayHello();
    }
};

obj.sayHello();

obj.name = '桃太郎';
obj.sayHelloTwice();