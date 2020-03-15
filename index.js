"use strict";
// let a:number;
// a=1;
// let b =1;
// b='srfrsgdg'
// let vv:string="Hello";
// let isActive =false;
// console.log('Hi');
// let numbers: number[];
// numbers=[1,2,3];
// let bool:boolean[];
// let employee: [number,string] = [1,"hjhk"];
// enum
// enum Sizes {
//     S =10,
//     L =12,
//     M =14
// }
// //union
// let nnn: (string|number);
// function sayHi(): void {
//     console.log("Hi")
// }
// function sum(a: number,b: number):number {
//     return a+b;
// }
// let sum1: number = sum(1,3);
// let str =(sum1+100000).toLocaleString('de-DE');
// console.log(str);
// let g:string ="hkjhjhkj";
// let f:string="jjjjkjjj";
// let str1: string =`${g} word ${f} one more word.`;
// console.log(str1);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
// let arr1: Array<string> = ["first","fsecond","third"];
// let arr2: string[] = ["fifth","sixth","seventh"];
// let arr: Array<string>;
// arr = arr1.concat(arr2);
// console.log(arr.length);
// let myTuole: [number,string,boolean] = [1,"Tom",true];
// let person1: [string|boolean,number,Array<number>][] = [["store",12,[1,2,3]]];
// console.log(person1.indexOf(['store',1,[1]]));
// enum Week {
//     Sunday=7, Monday=1, Tuesday, Wensday=ggg("wenday"), Thirday=4, Friday, Saterday
// }
// function ggg(ddd:string):number {
//     return (ddd === 'wensday'?3:8)
// }
// console.log(Week.Wensday);
// console.log(Week);
// console.log(Week["Monday"],Week.Monday,Week[3]);
// function displayType(param:(string|number)):void {
//     (typeof param === "string")?console.log("string"):console.log("number");
// }
// displayType("ghghgh");
// displayType(12);
// function sum<T>(arg: T): T {
//     return arg;
// }
// function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
//     return obj[key];
// }
var salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
};
//  function sumSalaries(obj:ObjectSalariesType):number {
//   let temp:number = 0;  
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       temp=temp+obj[key];
//     }
//   }
//   return temp;
// }
// function sumSalaries1(obj:ObjectSalariesType):number {
//   let temp:number = 0;  
//   for (let key in obj) {
//       temp+=obj[key];
//   }
//   return temp;
// }
// console.log(sumSalaries(salaries));
// console.log(sumSalaries1(salaries));
// console.log(sumSalaries(salaries));
// const maxSalaries2: (obj: {[key:string]:number;}) => number = 
// (obj: {[key:string]:number;}) => {
//     return Object.keys(obj).reduce((acc: number, cur: string) =>  (acc > obj[cur])?acc:obj[cur], -Infinity);}
// console.log(maxSalaries(salaries));
// console.log(maxSalaries1({}));
// console.log(maxSalaries(salaries));
// до вызова
// var menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };
//  multiplyNumeric(menu);
//  console.log(menu.width,menu.height);
// console.log(countBy(2,5));
// console.log(countBy(1,10));
// Задача №1. Напишите код, который выведет сумму всех зарплат. 
// export type ObjectSalariesType = {[key: string] : number};
// export const sumSalaries: (obj: ObjectSalariesType) => number = 
// (obj: ObjectSalariesType) => Object.keys(obj).reduce((sum: number, cur: string) => sum + obj[cur], 0);
// Задача №2. Напишите код, который выведет имя сотрудника, у которого самая большая зарплата.
// Если объект пустой, то пусть он выводит «нет сотрудников». 
// export function maxSalaries(obj: ObjectSalariesType): string {
//     let max: number = -Infinity;
//     let namePersonWithMaxSalary: string = '';
//     for (let key in obj) {
//         if (max <= obj[key]) {max = obj[key]; namePersonWithMaxSalary = key;}
//     }
//     return (namePersonWithMaxSalary === '') ? "нет сотрудников" : namePersonWithMaxSalary;
// }
// Задача №3. Создайте функцию multiplyNumeric, которая получает объект и умножает все численные свойства на 2. 
// Судя по заданию функция вносит изменения в объект menu
// export function multiplyNumeric(obj: {[key: string]: any}): void {
// //  function isNumeric(n: any): boolean {
// //    return !isNaN(parseFloat(n)) && isFinite(n)
// //  }
//   for (let item in obj) {
//       if (typeof obj[item] == "number") {obj[item] *= 2;}
//   }
// }
// Задача №4. Create a function with two arguments that will return a list of length (n) with multiples of (x).
// Return the results as an array (or list in Python, Haskell or Elixir).
// function countBy(step: number,count: number): number[] {
//   let resultArr: number[] = [];
//   let temp: number = 0;
//   for (let i = 0; i < count; i++) {
//     temp += step;
//     resultArr.push(temp); 
//   }
//   return resultArr;
// }
// Задача №5. Создайте функцию addClass(obj, cls), которая добавляет в список класс cls и возвращает новый обьект.
// function addClass(obj: {className: string},classToAdd: string): {className: string} {
//   if (obj.className.split(" ").indexOf(classToAdd) === -1) {obj.className +=' ' + classToAdd;}
//   return obj;
// }
// var obj = {
//     className: 'open menu'
//   }
// console.log(addClass(obj, 'new').className);
// console.log(addClass(obj, 'open').className);
// console.log(addClass(obj, 'me').className);
// после вызова
//   menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
//   };
//   P.S. Для проверки на число используйте функцию:
// // разберись
// function sumAll(...a: number[]) {
//     return a.reduce((acc: number, next: number) => acc + next,0)
// }
// const sumAll1: (...a:number[]) => number = (...a: number[]) => a.reduce((acc: number, next: number) => acc + next,0));
// let person1: {readonly name: string, role: string} = {name: "djfjfdgj", role: "Student"}
// let person: {readonly name: string, role: string} = {name: "djfjfdgj", role: "Student"}
// person.role = "mnbmjbm";
// interface IUser {
//     readonly username: string,
//     salary: number
// }
// let user = {
//     username: "Dan",
//     salary: 4353543
// }
// let person: IUser[] = 
// [
//     {
//         username:"den",
//         salary: 546
//     }
// ]
// // наследование интерфейсов
// interface ICar {
//     color: string;
//     speed: number;
//     setColor(color: string): void;
//     increaseSpeed(): number;
//     stop(): void;
//     stert(): void;
// }
// class Car implements ICar{
//     private color: string = "white";
//     private steed: number = 0;
//     constructor() {}
//     public setColor(color:string):void {
//         this.color = color;
//     }
//     public increaseSpeed():number {
//         return this.speed + 1
//     }
// }
// function smtn<U>(a:U):U {
//     return a;
// }
function smtn(a) {
    return a;
}
var smth1 = smtn(1);
var smth2 = smtn("jjhj");
console.log(smth1, smth2);
var promise;
var arr = [1, 2, 3, 30];
var a = null;
arr.push(a);
var code = 'ffgfghfg';
console.log(typeof code);
// code = 123;
// console.log(typeof code);
var empl = code;
console.log(typeof code);
console.log(typeof empl);
var arr1;
arr1 = [[1, "ds"], [2, "fdf"]];
for (var _i = 0, arr1_1 = arr1; _i < arr1_1.length; _i++) {
    var cur = arr1_1[_i];
    for (var _a = 0, cur_1 = cur; _a < cur_1.length; _a++) {
        var aa = cur_1[_a];
        console.log(aa);
    }
}
// interface IFType {
// [key: string]: any;
// }
var obj1 = {
    name: "Peter",
    age: 34,
    major: "Aplied Math"
};
for (var r in obj1) {
    console.log(r, obj1[r]);
}
var menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
/*export function multiplyNumeric(obj: {[key: string]: any}): void {
  //  function isNumeric(n: any): boolean {
  //    return !isNaN(parseFloat(n)) && isFinite(n)
  //  }
    for (let itemKey in obj) {
        if (typeof obj[itemKey] == "number") {obj[itemKey] *= 2;}
    }
  }
  multiplyNumeric(menu);
  console.log(menu.width,menu.height);*/
var i = 2;
do {
    console.log("Block statement execution no." + i);
    i++;
} while (i < 4);
var sumAll1 = function () {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    return a.reduce(function (acc, next) { return acc + next; }, 0);
};
exports.myConcat = function () {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    return a.reduce(function (acc, val) { return acc + val; }, "");
};
console.log(sumAll1(1, 2, 3, 4, 5), exports.myConcat("2", "5", "Peter"));
exports.sumSalaries = function (obj) { return Object.keys(obj).reduce(function (sum, cur) { return sum + obj[cur]; }, 0); };
console.log("ФОТ: ", exports.sumSalaries(salaries));
// Задача №2. Напишите код, который выведет имя сотрудника, у которого самая большая зарплата.
// Если объект пустой, то пусть он выводит «нет сотрудников». 
exports.maxSalaries = function (obj) {
    var max = -Infinity;
    var namePersonWithMaxSalary = '';
    for (var key in obj) {
        if (max <= obj[key]) {
            max = obj[key];
            namePersonWithMaxSalary = key;
        }
    }
    return (namePersonWithMaxSalary === '') ? "нет сотрудников" : namePersonWithMaxSalary;
};
// Задача №3. Создайте функцию multiplyNumeric, которая получает объект и умножает все численные свойства на 2. 
// Судя по заданию функция вносит изменения в объект menu
exports.multiplyNumeric = function (obj) {
    var isNumeric = function (n) { return !isNaN(parseFloat(n)) && isFinite(n); };
    for (var itemKey in obj) {
        if (isNumeric(obj[itemKey])) {
            obj[itemKey] *= 2;
        }
    }
};
// Задача №4. Create a function with two arguments that will return a list of length (n) with multiples of (x).
// Return the results as an array (or list in Python, Haskell or Elixir).
function countBy(step, count) {
    var resultArr = [];
    var temp = 0;
    for (var i_1 = 0; i_1 < count; i_1++) {
        temp += step;
        resultArr.push(temp);
    }
    return resultArr;
}
exports.countBy = countBy;
// Задача №5. Создайте функцию addClass(obj, cls), которая добавляет в список класс cls и возвращает новый обьект.
function addClass(obj, classToAdd) {
    if (obj.className.split(" ").indexOf(classToAdd.trim()) === -1) {
        obj.className += ' ' + classToAdd.trim();
    }
    return obj;
}
exports.addClass = addClass;
var fullNamePerson = function (first, last) { return first + " " + last; };
console.log(fullNamePerson("Peter", "Maliar"));
var arr3 = [1, 2, 3, 1];
var x = { name: "Peter", age: 23 };
x.name = '45';
var xx = { name: "Ivan", age: 45, inn: 67677 };
var Recrute = /** @class */ (function () {
    function Recrute(fN, lN, age) {
        var _this = this;
        this.greeting = function () { return console.log("Hello, " + _this.fName + " " + _this.lName + ". You are " + _this.age); };
        this.fName = fN;
        this.lName = lN;
        this.age = age;
    }
    return Recrute;
}());
var recrute = new Recrute("Peter", "Maliar", 46);
recrute.greeting();
var Pperson = /** @class */ (function () {
    function Pperson() {
        this.name = "";
        this.age = 16;
    }
    //  constructor(n:string) {
    //    this.name = n;
    //  }
    Pperson.prototype.greeting = function () {
        console.log("Hello! " + this.name);
    };
    return Pperson;
}());
var Ppperson = /** @class */ (function (_super) {
    __extends(Ppperson, _super);
    function Ppperson(n, a) {
        var _this = _super.call(this) || this;
        _this.inn = 0;
        _this.age = a;
        _this.name = n;
        return _this;
    }
    Ppperson.prototype.setInn = function (i) {
        this.inn = i;
        console.log('Dear ' + this.name + '! You are ' + this.age + '. And your INN is ' + this.inn);
    };
    return Ppperson;
}(Pperson));
var ppp = new Ppperson("Peter", 46);
ppp.setInn(4566556);
ppp.greeting();
var Car = /** @class */ (function () {
    function Car(n) {
        this.name = n;
    }
    Car.prototype.run = function (speed) {
        if (speed === void 0) { speed = 0; }
        console.log(this.name + ' is moving at speed ' + speed + ' km/h!');
    };
    return Car;
}());
var Honda = /** @class */ (function (_super) {
    __extends(Honda, _super);
    function Honda(n) {
        return _super.call(this, n) || this;
    }
    Honda.prototype.run = function (speed) {
        if (speed === void 0) { speed = 100; }
        console.log("Honda starts! ");
        _super.prototype.run.call(this, speed);
    };
    return Honda;
}(Car));
var Mersedes = /** @class */ (function (_super) {
    __extends(Mersedes, _super);
    function Mersedes(n) {
        return _super.call(this, n) || this;
    }
    Mersedes.prototype.run = function (speed) {
        if (speed === void 0) { speed = 150; }
        console.log("Mersedes starts! ");
        _super.prototype.run.call(this, speed);
    };
    return Mersedes;
}(Car));
var honda = new Honda("Honda");
var mersedes = new Mersedes("Mersedes S");
honda.run(33);
mersedes.run(77);
var Man = /** @class */ (function () {
    function Man(n) {
        var _this = this;
        this.display = function () { return console.log("I'm " + _this.name + '.' + "I'm " + _this.age + "."); };
        this.name = n;
    }
    return Man;
}());
var derivedMan = /** @class */ (function (_super) {
    __extends(derivedMan, _super);
    function derivedMan(n, a) {
        if (a === void 0) { a = 16; }
        var _this = _super.call(this, n) || this;
        _this.greeting = function () { return console.log("Hello!"); };
        _this.age = a;
        return _this;
    }
    return derivedMan;
}(Man));
var man = new derivedMan("Peter", 46);
man.display();
man.greeting();
var Employee = /** @class */ (function () {
    function Employee(name, code) {
        this.empName = name;
        this.empCode = code;
    }
    return Employee;
}());
var SalesEmployee = /** @class */ (function (_super) {
    __extends(SalesEmployee, _super);
    function SalesEmployee(name, code, department) {
        var _this = _super.call(this, name, code) || this;
        _this.display = function () { return console.log(_this.empCode, _this.empName); };
        _this.department = department;
        return _this;
    }
    return SalesEmployee;
}(Employee));
var emp = new SalesEmployee("John Smith", 123, "Sales");
emp.display();
var Employee1 = /** @class */ (function () {
    function Employee1(code, name) {
        this.empCode = code;
        this.empName = name;
    }
    return Employee1;
}());
var emp1 = new Employee1(10, "John");
emp1.empName = 'Bill'; //Compiler Error
console.log(emp1.empName, emp1.empCode);
var Circle = /** @class */ (function () {
    function Circle() {
        this.radius = 0;
        this.circumference = function (r) { return 2 * Circle.pi * r; };
    }
    Circle.pi = 3.14;
    Circle.circleArea = function (r) { return Circle.pi * r * r; };
    return Circle;
}());
console.log(Circle.pi, Circle.circleArea(10));
var f = new Circle();
console.log(f.circumference(10));
var file1_1 = require("./file1");
var obj2 = new file1_1.Employee2("Petr", 46);
obj2.display();
console.log(file1_1.age3);
function concatArray(arr, item) { return arr.concat([item]); }
console.log(concatArray(['Ivan', "Sam"], "ghhgh"));
console.log(concatArray([1, 2], 3));
var PersonX = /** @class */ (function () {
    function PersonX(f, l) {
        this.fName = f;
        this.lName = l;
    }
    return PersonX;
}());
function display1(per) {
    console.log(per.fName + " " + per.lName);
}
var objPer = new PersonX("Ivan", "Bugai");
display1(objPer);
var PokemonTypes;
(function (PokemonTypes) {
    PokemonTypes[PokemonTypes["Water"] = 0] = "Water";
    PokemonTypes[PokemonTypes["Fire"] = 1] = "Fire";
    PokemonTypes[PokemonTypes["Flying"] = 2] = "Flying";
})(PokemonTypes || (PokemonTypes = {}));
var pikachu = {
    type: PokemonTypes["Water"],
    weigth: 100,
    strength: 50,
    health: 77
};
function getPropertyPokemon(obj, keyProperty) {
    return obj[keyProperty];
}
// function pick<T,K extends keyof T>(obj:T,...keys:K[]):Pick<T,K> {
//   let result = {} as Pick<T,K>;
//   for (let key in obj) {
//     if ((<string[]>keys).indexOf(key)!==-1) {
//       result[key]=obj[key];   
//     }
//   }
//   return result;
// }
console.log(getPropertyPokemon(pikachu, "type"));
function updateTodo(todo, fieldsToUpdate) {
    return __assign({}, todo, fieldsToUpdate);
}
var todo1 = {
    title: 'organize desk',
    description: 'clear clutter',
};
var todo2 = updateTodo(todo1, {
    description: 'throw out trash',
});
console.log(todo2.description);
var GClass = /** @class */ (function () {
    function GClass(a, b) {
        this.a = a;
        this.b = b;
    }
    GClass.prototype.display = function () {
        console.log("a: " + this.a, "b: " + this.b);
    };
    return GClass;
}());
var ss = new GClass(1, 2);
ss.display();
var s1 = new GClass("ffgff", 2);
s1.display();
