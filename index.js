'use strict'

// function showThis(a, b) {
//     console.log(this);
//
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }

//showThis(4, 5);

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//      console.log(this);
//     }
// };
//
// obj.sum();

// 1) Обычная функция: this = window, но если use strict, то this= undefined
//2) Если мы используем метод внутри объекта, то контекст метода будет ссылаться на сам объект
//3) this В конструкторах и классах - это новый экземпляр объекта
//4) Ручная привязка this
// function User(name, id) {
//     this.name = name; // Для каждого отдельного пользователя мы указываем отдельные параметры
//     this.id = id;
//     this.human = true;
// }
//
// let oleksii = new User('Oleksii', 30);

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }
//
// const user = {
//     name: 'John '
// }
//
// sayName.call(user, 'Smith'); // Мы передаём контекст вызова, который мы хотим передать в эту функцию
// sayName.apply(user, ['Smith']);
//
// function count(num) {
//     return this*num;
// }
// /*Метод bind создаёт новую функцию, связанную с определенным контекстом*/
//
// const double = count.bind(2); // двойка переходит в качестве аргумента this, а num будет передаваться в double
// console.log(double(3));
// console.log(double(13));


const btn = document.querySelector('button');

btn.addEventListener('click', function (e) {
    e.target.style.backgroundColor = 'red';
});

const obj = {
    num: 5,
    sayNumber: function () {
        const say = () => {
            console.log(this.num);
        };
        say();
    }
};

obj.sayNumber();


const double = (a) =>  a*2;

console.log(double(4));