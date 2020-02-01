/****************************
* Variables and data types
*/
/*
var firstName = "Jhon";
console.log(firstName);

var lastName = "Smith";
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = "Teacher";
console.log("job");


//Variable naming rules
var _3years = 3;
var johnMark = "John and Mark";
var if = 23;
*/

/****************************
* Variables mutation data type coercion 


var firstName = "John";
var age = 28;

console.log(firstName + " " + age);

var job, isMarried;
job = "teacher";
isMarried = false;

console.log(firstName + " is a " + age + " year old" + job + " Is he married? " + isMarried);

// Variable mutation
age = "twenty eight";
job = "driver";

alert(firstName + " is a " + age + " year old " + job + ". Is he married? " + isMarried);

var lastName = prompt("What is his last Name");
console.log(firstName + " " + lastName);
*/

/******************************
 * Basic operators
 */

// var year, yearJohn, yearMark;
// now = 2018;
// ageJohn = 28;
// ageMark = 33;

// // Math operators
// yearJohn = now - ageJohn;
// yearMark = now - ageMark;

// console.log(yearJohn);

// console.log(now + 2);
// console.log(now + 2);
// console.log(now / 10);


// // Logical operators
// var johnOlder = ageJohn < ageMark;
// console.log(johnOlder);


// // typeof operator
// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof 'Mark is older the John');
// var x;
// console.log(typeof x);


/******************************
 * Operator precedence
 */

// var now = 2019;
// var yearJohn = 1989;
// var fullAge = 20;

// // Multiple operators
// var isFullAge = now - yearJohn >= fullAge;
// console.log(isFullAge);

// // Grouping
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);

// // Multiple assignments
// var x, y;
// x = y = (3 + 5) * 4 - 6;
// console.log(x,y);

// // More operators
// x *= 2;
// console.log(x);


// var massMark = 78; //kg
// var heightMark = 1.69; //meters

// var massJohn;
// var heightJohn = 1.95;

// var BMIMark = massMark / (heightMark * heightMark);
// var BMIJohn = massJohn / (heightJohn * heightJohn);

// var markHigherBMI = BMIMark > BMIJohn;
// console.log("Is Mark\'s BMI higher than John\'s? ' + markHigherBMI");

/******************************
 * If / else statements
 */

// var firstName = "john";
// var civilStatus = "single";

// if (civilStatus === "married"){
//     console.log(firstName + " is married!");
// } else {
//     console.log(firstName + " will hopefully marry soon :)");
// }


// var isMarried = true;
// if (isMarried){
//     console.log(firstName + " is married!");
// } else {
//     console.log(firstName + " will hopefully marry soon :)");
// }

//前述した式をif/elseを使うことで、簡略化、分岐が可能となる

// var massMark = 78; //kg
// var heightMark = 1.69; //meters

// var massJohn;
// var heightJohn = 1.95;

// var BMIMark = massMark / (heightMark * heightMark);
// var BMIJohn = massJohn / (heightJohn * heightJohn);

// if(BMIMark > BMIJohn) {
//     console.log("Mark\' BMI is higher than John\'s.");
// } else {
//     console.log("John\' BMI is higher than Ma\'S.");
// }



/******************************
 * Boolean logic
 */

// var firstName ="John";
// var age = 16;

// if(age < 13) {
//     console.log(firstName + "is a boy.");
// } else if (age >= 13 && age < 20 /* 13 <= age < 20 */) {
//     console.log(firstName + "is a teenager.");
// } else if (age >= 20 && age < 30) {
//     console.log(firstName + "is a young man.");
// } else {
//     console.log(firstName + "is a man.");
// }



/******************************
 * The Ternary Operator and Switch Statements
 */

// var firstName = 'John';
// var age = 14;

// // Ternary operator
// age >= 18 ? console.log(firstName + " drinks beer."):
// console.log(firstName + " drinks juice.");

// var drink = age >= 18 ? "beer" : "juice";
// console.log(drink);

/*if (age >= 18) {
    var drink = "beer";
} else {
    var drink = "juice";
}*/

// Switch statement
// Switchを使うことで様々な分岐が複数切り替え可能
// var job = "teacher";
// switch(job) {
//     case "teacher":
//     case "instructor":
//         console.log(firstName + " teaches kids how to code.");
//         break;
//     case "driver":
//         console.log(firstName + " drives an uber in Lisbon.");
//         break;
//     case "designer":
//         console.log(firstName + " designs beautiful websites.");
//         break;
//     default:
//         console.log(firstName + " does something else.");
// }

// age = 17;
// switch(true){
//     case age < 13:
//         console.log(firstName + "is a boy.");
//         break;
//     case age >= 13 && age < 20:
//         console.log(firstName + "is a teenager.");
//         break;
//     case age >= 20 && age < 30:
//         console.log(firstName + "is a young man.");
//         break;
//     default:
//         console.log(firstName + "is a man.");
// }


/******************************
 * Truthy and Falsy values and equality operators
 */

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

// var height;

// height = 23;

// if(height || height === 0) {
//     console.log("Variable is defined");
// } else {
//     console.log("Variable has NOT been defined");
// }

// // Equality operators
// if(height == "23") {
//     console.log("The == operator does type coercion!");
// }


/******************************
 * solution
 */


/*var scoreJohn = (89 + 120 + 103) / 3;
var scoreMike = (116 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3
console.log(scoreJohn, scoreMike, scoreMary);

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log("John\'s team wins with " + scoreJohn + " points");
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log("Mike\'s team wins with " + scoreMike + " points");
} else if (scoreMary > scoreJohn && scoreMike > scoreMary) {
    console.log("Mary\'s team wins with " + scoreMary + " points");
} else {
    console.log("There is a draw");
}*/


/* if(scoreJohn > scoreMike) {
    console.log("John\'s team wins with " + scoreJohn + " points");
} else if (scoreMike > scoreJohn) {
    console.log("John\'s team wins with " + scoreMike + " points");
} else {
    console.lig('There is a draw');
}*/



/******************************
 * Functions
 */

/*
function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageMary = calculateAge(1969);
var ageJane = calculateAge(2010);
console.log(ageJohn, ageMike, ageMary, ageJane);


function yearsUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;
    if(retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.');
    }
}

yearsUntilRetirement(1990,'john');
yearsUntilRetirement(1948,'Mike');
yearsUntilRetirement(1969,'Mary');
yearsUntilRetirement(2010,'Jane');
*/


/******************************
 * Functions Statements and Expressions
 */

// Function declaration 
// function whatDoYouDo(job, firstName) {}

// Function expression
/*
var whatDoYouDo = function(job, firstName) {
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab in Lisbon.'
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('teacher', 'john'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
*/

/******************************
 * Arrays
 */

// Initialize new array
/*
var names = ['John', 'mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

// Mutate array date
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 
'John is NOT a designer' : 'John IS a designer'
console.log(isDesigner);
*/

/******************************
 * Objects and properties
 */

/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// new Object syntax
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
*/


//sample
/*
var asahi = {
    firstName: 'Asahi',
    lastName: 'Nakasone',
    birthYear: 1998,
    family: ['Tomoe', 'Nana', 'Asaya', 'Sora'],
    job: 'programer',
    isMarried: false,
}
console.log(asahi.birthYear);
*/

/******************************
 * 
 */

/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(birthYear) { //年齢が出る
        this.age = 2018 - this.birthYear;
    }
};

john.calcAge();
console.log(john);
*/


/******************************
 * solution
 */

/*
var john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}


var mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

if(john.calcBMI > mark.calcBMI) {
    console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
} else if (mark.bmi > john.bmi) {
    console.log(mark.fullName + ' has a higher BMI of ' + john.bmi);
} else {
    console.log('They have the same BMI');
}

*/

/******************************
 * Loops and iteration
 */

// for loop
/*
for (var i = 1; i <= 20; i += 2) {
    console.log(i);
} 
*/
// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1 , 10 true, log i tu the console, i ++
// ...
// i = 9, 9 < 10 true, log i tu the console, i ++
// i = 10, 10 < 10 FALSE, exit the loop!

/*
var john = ['John', 'Smith', 1990, 'teacher', false, 'blue'];
for (var i = 0; i < john.length; i++) {
    console.log(john[i]);    
}

//while loop
var i = 0;
while(i < john.length) {
    console.log(john[i]);
    i++;
}
*/


// continue and break statements
/*
var john = ['John', 'Smith', 1990, 'teacher', false, 'blue'];
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);    
}


for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);    
}


// Looping backwards //後ろから数えている
for(var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}
*/


/******************************
 * Solution
 */

/*
var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function(){
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++){
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];

            if(bill < 50){
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                    percentage = .15;
                } else {
                    percentage = .1;
                }

            // Add results to the corresponing arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }

    }
}

var mark = {
    fullName: 'Mark Miller',
    bills: [77, 475, 110, 45],
    calcTips: function(){
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++){
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];

            if(bill < 100){
                percentage = .2;
            } else if (bill >= 100 && bill < 300) {
                    percentage = .1;
                } else {
                    percentage = .25;
                }

            // Add results to the corresponing arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }

    }
}

function calcAverage(tips) {
    var sum = 0;
    for(var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

// Do the calculations
john.calcTips();
mark.calcTips();
console.log(john,mark);

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
    console.log(john.fullName + '\'s family pays higher tips, with an average of $' + john.average);
} else if (mark.average >john.average) {
    console.log(mark.fullName + '\'s family pays higher tips, with an average of $' + mark.average)
}
*/



/******************************
 * Section 3
 *******************************/

/*
 //functions
calculateAge(1965);

function calculateAge(year) {
    console.log(2016 - year);
}


// retirement(1956);
var retirement = function(year) {
    console.log(65 - (2016 - year));
}


// variables

console.log(age);
var age = 23;


function foo() {
    console.log(age);
    var age = 65;
    console.log(age);
}
foo();
console.log(age);

*/


// First scoping example
/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second(){
        var c = 'Hey!';
        third();
    }
}

function third(){
    var d = 'John';
    console.log(c);
    console.log(a+d);
}
*/


// console.log(this);
/*
calculateAge(1985);

function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);
}
*/

/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function(){
        console.log(this);
        console.log(2016 - this.yearOfBirth);

        function innerFunction(){
            console.log(this);
        }
        innerFunction();
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();
*/


/******************************
 * Section 4
 *******************************/
/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function() {
    
    // 1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2.Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';


    // 3.Update the round score IF the rolled number was NOY a 1
    if(dice !== 1) {
        //Add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        //Next player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        // document.querySelector('.player-0-panel').classList.remove('active');
        // document.querySelector('.player-1-panel').classList.add('active');

        document.querySelector('.dice').style.display = 'none';
    }

});

// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'
// var x = document.querySelector('#score-0').textContent;














