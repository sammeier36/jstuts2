/************************
 * Variables and data types
 */

// var firstName = 'John';
// console.log(firstName);

// var lastName = 'smith';
// var age = 28;

// var fullAge = true;

// console.log(fullAge);

// var job;
// console.log(job);

// job = 'teacher';
// console.log(job);

// // Variable naming rules
// var _3years = 3;
// var johnMark = 'John and Mark';
// var if = 23;

/***********************
 * Variable mutation and type coercion
 */

//  var firstName = 'John';
//  var age = 28;

//  console.log(firstName + ' ' + age);

// var job, isMarried;
// job = 'teacher';
// isMarried = false;

// console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// // Variable mutation

// age = 'twenty eight';
// job = 'driver';

// alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// var lastName = prompt('What is his last Name?');
// console.log(firstName + ' ' + lastName);

/***********************
* Basic Operators
*/
// var now, yearJohn, yearMark;
// now = 2018;
// ageJohn =28;
// ageMark= 33;


// yearJohn = now - ageJohn;
// yearMark = now - ageMark;
// console.log(yearJohn);
// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 10);

// //logical operators
// var johnOlder = ageJohn < ageMark;
// console.log(johnOlder);

// //type0f operator 

// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof 'ageJohn');
// var x;
// console.log(typeof x);

/***********************
* Basic Operators
*/

// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// var isFullAge = now - yearJohn >= fullAge; //true
// console.log(isFullAge);

// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var averageAge = (ageJohn + ageMark) / 2;
// console.log(averageAge);

// // Multiple assignments

// var x, y;
// x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
// console.log(x, y);

// // 2 + 4 + 5 


// // MOre Operators
// x *= 2;
// console.log(x);
// x += 0;
// console.log(x);
// x++;
// console.log(x);


/***********************
* Challenge 1
*/

// var massMark = 78;
// var heightMark = 4;
// var massJohn = 79;
// var heightJohn = 3;

// var markBmi = massMark / (heightMark * heightMark);

// var johnBmi = massJohn /(heightJohn * heightJohn);

// console.log(markBmi);
// console.log(johnBmi);
// var greaterBmi = markBmi > johnBmi;
// console.log('Is Mark\'s BMI higher than John\'s? ' + greaterBmi);

/***********************
* If / Else statements
*/

// var firstName = 'John';
// var civilStatus ='single';
//  if (civilStatus === 'married') {
//      console.log(firstName + ' is married!');
//  } else {
//      console.log(firstName + ' isn\'t married!');
//  }

//  var isMarried = true;
//  if (isMarried) {
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' isn\'t married!');
// }

// var massMark = 78;
// var heightMark = 4;
// var massJohn = 79;
// var heightJohn = 3;
// var markBmi = massMark / (heightMark * heightMark)
// var johnBmi = massJohn /(heightJohn * heightJohn)
// console.log(markBmi);
// console.log(johnBmi);
// var greaterBmi = markBmi > johnBmi;
// console.log('Is Mark\'s BMI higher than John\'s? ' + greaterBmi);

/***********************
* Boolean logic
*/

// var firstName = 'John';
// var age = 16;

// if (age < 13) {
//     console.log(firstName + ' is a boy.');
// } else if (age >= 13 && age < 20) {
//     console.log(firstName + ' is a teen.');
// } 
// else {
//     console.log(firstName + 'is a man.');
// }
/***********************
* Ternary and switch statements
*/

// var firstName ='John';
// var age = 22;

// age >= 18 ? console.log(firstName + ' drinks beer') : console.log(firstName + ' drinks juice')

// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);


// //switch statement

// var job = 'teacher';
// switch (job) {
//     case 'teacher':
//     console.log(firstName + ' teaches people');
//     break;
//     case 'student':
//     console.log(firstName + ' learns');
//     break;
//     case 'tech':
//     console.log(firstName + ' codes');
//     break;
//     default:
//     console.log('default');
// }

// switch (true) {
//     case age < 13:
//     console.log(firstName + ' is a boy');
//     break;
//     case age >= 13 && age < 20:
//     console.log(firstName + ' is a teen');
//     break;
//     case age >= 20 && age < 30:
//     console.log(firstName + ' is a young man');
//     break;
//     default:
//     console.log(firstName + ' is a man');
// }

// Assignment 1

// var averageJohn = (89 + 120 + 103) / 3;
// var averageMike = (116 + 94 + 123) / 3;
// var averageMary = (97 + 134 + 185) / 3

// switch (true) {
//     case averageJohn > averageMike && averageJohn > averageMary:
//         console.log('John has the greater score' + ' score = ' + averageJohn);
//         break;
//     case averageMike > averageJohn && averageMike > averageMary:
//         console.log('Mike has the greater score' + ' score = ' + averageMike);
//         break;
//     case averageMary > averageJohn && averageMary > averageMike:
//         console.log('Mary has the greater score' + ' score = ' + averageMary);
//         break;
//     default:
//         console.log('It\'s a draw' + ' score = ' + 'Mike ' + averageMike + ', John ' + averageJohn);
// }

/**********************
 * Functions
 */

//  function calculateAge(birthYear) {
//      return 2020 - birthYear;
//  }

// const ageJohn = calculateAge(1990);
// const ageMike = calculateAge(1992);
// const ageJane = calculateAge(1988);
// console.log(ageJohn, ageMike, ageJane);

// function yearsUntilRetirement(year, firstName) {
//     const age = calculateAge(year);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//     console.log(firstName + ' retires in ' + retirement + ' years.');
//     } else {
//         console.log('This asshole ' + firstName + ' is retired');
//     }
// }

// yearsUntilRetirement(1992, 'John');
// yearsUntilRetirement(1942, 'Mike');
// yearsUntilRetirement(1962, 'Jane');

/*********************
 * Function Statements and Expressions
 */

// Function declaration
// function whatDoYouDo(job, firstName) {}

// Function Expression
// const whatDoYouDo = function(job, firstName) {
//     switch(job) {
//         case 'teacher':
//             return firstName + ' teaches kids how to code.';
//         case 'driver':
//             return firstName + ' drives a cab in Lisbon.';
//         case 'designer':
//             return firstName + ' Designs websites.';
//         default:
//             return firstName + ' does something else.';
//     }
// }

// console.log(whatDoYouDo('teacher', 'John'));
// console.log(whatDoYouDo('driver', 'Mike'));
// console.log(whatDoYouDo('designer', 'Jane'));
// console.log(whatDoYouDo('retired', 'Mark'));

/***********************
 * Arrays
 */

 // Initialize new array
// const names = ['John', 'Mark', 'Jane'];
// const years = new Array(1990, 1969, 1948);

// console.log(names[0]);
// console.log(names.length);

// // Mutate array data
// names[1] = 'Ben';
// names[names.length] = 'Mary';
// console.log(names);

// // Different data types

// const john = ['John', 'Smith', 1990, 'designer', 'false'];

// john.push('blue');
// john.unshift('Mr.');
// console.log(john);
// john.pop();
// john.pop();
// john.shift();
// console.log(john);

// console.log(john.indexOf(1990));

// const isDesigner = john.indexOf('designer') === -1 ? 'John is Not a designer' : 'John is a designer';

// console.log(isDesigner);

// function tipAmount(bill) {
//     return 0.2 * bill;
// }
// const tipAmntOne = tipAmount(124);
// const tipAmntTwo = tipAmount(48);
// const tipAmntThree = tipAmount(268);

// // console.log(tipAmntOne);
// // console.log(tipAmntTwo);
// // console.log(tipAmntThree);
// const tipAmnts = [tipAmntOne, tipAmntTwo, tipAmntThree]
// console.log(tipAmnts);
// const totalBill = [tipAmntOne + 124, tipAmntTwo + 48, tipAmntThree + 268]
// console.log(totalBill);

/***********************
 * Objects and Properties
 */
// onject literal
//  const john = {
//      firstName: 'John',
//      lastName: 'Smith',
//      birthYear: 1990,
//      family: ['Jane', 'Mark', 'Bob', 'Emaily' ],
//      job: 'teacher',
//      isMarried: false
//  };
//  console.log(john.firstName);
//  console.log(john['lastName']);
// const x = 'birthYear';
//  console.log(john[x]);

//  john.job = 'designer';
//  john['isMarried'] = true;
//  console.log(john);

//  // new object syntax

//  const jane = new Object();
//  jane.firstName = 'Jane';
//  jane.birthYear = 1969;
//  jane.lastName = 'Smith';
//  console.log(jane);

/*************************
 * Objects and methods
 */

// const john = {
//          firstName: 'John',
//          lastName: 'Smith',
//          birthYear: 1992,
//          family: ['Jane', 'Mark', 'Bob', 'Emaily' ],
//          job: 'teacher',
//          isMarried: false,
//          calcAge: function(birthYear) {
//              this.age = 2018 - this.birthYear;
//          }
//      };
// john.calcAge();
// console.log(john);

/***********
 * coding challenge 4
 */

//  const Mark = {
//      fullName: 'Mark Smith',
//      mass: 170,
//     height: 68,
//      calcBMI: function() {
//          this.BMI = this.mass / (this.height * this.height);
//          return this.BMI;
//      }
//  };
//  console.log(Mark);

//  const John = {
//     fullName: 'John Smith',
//     mass: 160,
//     height: 69,
//     calcBMI: function() {
//         this.BMI = this.mass / (this.height * this.height);
//         return this.BMI;
//     }
// };



//  if (John.calcBMI() > Mark.calcBMI()) {
//     console.log( John.fullName + '\'s' + ' BMI = ' + John.BMI );
//  } else if (John.BMI < Mark.BMI) {
//     console.log( Mark.fullName + '\'s' + ' BMI = ' + Mark.BMI );
//  } else {
//     console.log( 'They have the same BMI.' );
//  }

/****************
 * Loops and iteration
 */

// for (let i = 1; i <= 20; i += 2) {
//     console.log(i);
// }

// // i = 0, 0 < 10 true, log i to console, i ++
// // i = 1, 1 < 10 true, log i to console, i ++
// //...
// // i = 10, 10 < 10 false, log i to console, i ++

// const john = ['John', 'Smith', 1990, 'designer', 'false'];

// for (let i = 0; i < john.length; i++) {
//     console.log(john[i]);
// }

// // while loop
// let i = 0;
// while(i < john.length) {
//     console.log(john[i]);
//     i++;
// }

// continue and break statements

// const john = ['John', 'Smith', 1990, 'designer', 'false'];

// for (let i = 0; i < john.length; i++) {
//     if (typeof john[i] !== 'string') continue;
//     console.log(john[i]);
// }

// for (let i = 0; i < john.length; i++) {
//     if (typeof john[i] !== 'string') break;
//     console.log(john[i]);
// }

// //looping backwards
// for (let i = john.length - 1; i >= 0; i--) {
//     console.log(john[i]);
// }

const johnBillTips = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
        for (var i = 0; i < this.bills.length; i++)
        {
            //determine percentage based on tiping rules
            let percentage;
            let bill = this.bills[i];
            if(bill < 50) {
                percentage = .2;
            } else if(bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }

            //add result to corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + (bill * percentage);

        }

        }
    }




    const johnBillTips = {
        fullName: 'Mark Miller',
        bills: [77, 475, 268, 180, 42],
        calcTips: function() {
            this.tips = [];
            this.finalValues = [];
            for (var i = 0; i < this.bills.length; i++)
            {
                //determine percentage based on tiping rules
                let percentage;
                let bill = this.bills[i];
                if(bill < 50) {
                    percentage = .2;
                } else if(bill >= 50 && bill < 200) {
                    percentage = .15;
                } else {
                    percentage = .1;
                }
    
                //add result to corresponding arrays
                this.tips[i] = bill * percentage;
                this.finalValues[i] = bill + (bill * percentage);
    
            }
    
            }
        }
    
        johnBillTips.calcTips();
        console.log(johnBillTips);