'use strict';

console.log('Hello World!!');

const profile = {name: 'OJK', weight: 85};
profile.bloodtype = 'A';
profile['height'] = 181;
profile.name = 'historio';

const obj = {a: 'A', b: 'B', c: 'C'};

for (const prop in obj){
    console.log(prop);
    console.log(obj[prop]);
}