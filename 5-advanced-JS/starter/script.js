//Function constructor

// let john = {
//     name: 'john',
//     yearOfBirth: 1990,
//     job: 'teacher'
// };
// let Person = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person.prototype.calculateAge = 
// function() {
//     console.log(2016 - this.yearOfBirth);
// };
// Person.prototype.lastName = 'Smith';

// let john = new Person('John', 1990, 'teacher');

// let Jane = new Person('Jane', 1999, 'designer');

// let Mark = new Person('Mark', 1948, 'retired');

// john.calculateAge();
// Jane.calculateAge();
// Mark.calculateAge();
// console.log(john.lastName);
// console.log(Jane.lastName);
// console.log(Mark.lastName);


//object.create

// let personProto = {
//     calculateAge: function() {
//         console.log(2016 - this.yearOfBirth);
//     }
// };

// let john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'teacher';

// let jane = Object.create(personProto,
//     {
//         name: { value: 'Jane' },
//         yearOfBirth: { value: 1969 },
//         job: { value: 'Designer' }, 
//     });

//Primitives vs Objects

// let a = 23;
// let b = a;
// a = 46;
// console.log(a);
// console.log(b);

// let obj1 = {
//     name: 'John',
//     age:26
// };
// let obj2 = obj1;
// obj1.age = 30;
// console.log(obj1.age);
// console.log(obj2.age);

// //functions

// let age = 27;
// let obj = {
//     name: 'Sam',
//     city: 'Detroit'
// };
// function change(a, b) {
//     a = 30;
//     b.city = 'San Fran'
// }

// change(age, obj);
// console.log(age);
// console.log(obj.city);

// let years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn) {
//     let arrRes = [];
//     for (let i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }

// function calculateAge(el) {
//     return 2016 - el;
// }

// function isFullAge(el) {
//     return el >= 18;
// }

// function maxHeartRate(el) {

//     if (el >= 18 && el <= 81){
//         return Math.round(206.9 - (0.67 * el));
//     } else {
//         return -1;
//     }
// }

// let ages = arrayCalc(years, calculateAge);
// let fullAges = arrayCalc(ages, isFullAge);
// let rates = arrayCalc(ages, maxHeartRate);

// console.log(ages);
// console.log(rates);

////////////////////////////////
// Lecture: Function returning functions

// function interviewQuestion(job) {
//     if (job === 'designer') {
//         return function(name) {
//             console.log(name + ', can you please explain what ux design is?');
//         }
//     }  else if (job === 'teacher') {
//         return function(name) {
//             console.log('what subject do you teach, ' + name + '?');
//         }
//     } else {
//         return function(name) {
//             console.log('Hello ' + name + ', what do you do?');
//         }
//     }
// }

// let teacherQuestion = interviewQuestion('teacher');
// let designerQuestion = interviewQuestion('designer');

// teacherQuestion('John');
// designerQuestion('John');
// interviewQuestion('teacher')('Mark');

///////////////////////////////////
// Lecture IIFE

// function game() {
//     let score = Math.random() * 10;
//     console.log(score >= 5);
// }
// game();

// (function () {
//     let score = Math.random() * 10;
//     console.log(score >= 5);
// })();


// (function (goodLuck) {
//     let score = Math.random() * 10;
//     console.log(score >= 5 - goodLuck);
// })(5);

///////////////////////////////////
//closures

function retirement(retirementAge) {
    let a = ' years left until retirement.';
    return function(yearOfBirth) {
        let age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

let retirementUS = retirement(66);
let retirementGermany = retirement(65);
let retirementIceland = retirement(67);

retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);

