var eggs = ['egg1', 'egg2', 'egg3']

var myEgg = eggs[1];

console.log(myEgg);                     // egg2
console.log(eggs.length);               // 3
console.log(eggs.includes('egg3'));     // true 


function checkName(guestsArr, name) {
    if (guestsArr.includes(name)) {
        console.log('Welcome!');
    } else {
        console.log('Sorry, maybe next time!');
    }
}

var guestList = ['Niki', 'Kamen', 'Simo'];
checkName(guestList, 'Niki');
