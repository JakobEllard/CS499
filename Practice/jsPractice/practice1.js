// ==========================================================
// CS 499: JavaScript Fundamentals Starter Code
// ==========================================================

// ----------------------------------------------------------
// PART 1: Quirks, Coercion, and Equality
// ----------------------------------------------------------


/*
// 1.1
let tuitionBalance = "1500";
let labFee = 50;
let latePenalty = "20";

let totalBalance = tuitionBalance + labFee; //actual 150050 or string plus a string
//I predict an error for both because we have 2 strings
let reducedBalance = tuitionBalance - latePenalty;//actual is 1480

//js is treating the + as two seperate strings but using implicit coercion to do the math with subtraction
console.log(`Total Balance: ${totalBalance}`);
console.log(`Reduced Balance: ${reducedBalance}`);
*/


/*
// 1.2 
let studentID = 10482;
let enteredID = "10482";
let campusAccessGranted = false;
let userStatusCode = 0;

console.log("Loose equality (ID):", studentID == enteredID);//predicted - true
//actual - true
console.log("Strict equality (ID):", studentID === enteredID);//predicted -false
//actual - false
console.log("Loose equality (Status):", userStatusCode == campusAccessGranted);//predicted - true
//actual -true
console.log("Strict equality (Status):", userStatusCode === campusAccessGranted);//predicted -true
//actual -false

//strict equality prevents any potential errors in calculation made by js using type coercion to force an answer
*/


// 1.3 
/*
let courseWaitlist = [];
let accountBalance = 0;

if (courseWaitlist) {//empty set - im guessing true but i cant explain why
    console.log("Waitlist process initialized.");//actual
} else {
    console.log("No waitlist found.");
}

if (accountBalance) {//should be false? im thinking it'll read as a boolean
    console.log("Account active.");
} else {
    console.log("Account balance zero/inactive.");//actual false
}

//falsy values - false, 0, "" empty string, null, undefined, NaN
// empty set is truthy, I had to google it but its because of "vacuous truth". a statement like "all unicorns
//in my house are white" is true, but not because i secretly have a white unicorn.
*/

// ----------------------------------------------------------
// PART 2: Loops & Array 
// ----------------------------------------------------------

// 2.1 
/*
const weeklyExpenses = [45.50, 12.00, 85.25, 3.75];

console.log("for...of iteration:");// outputs actual values - 45.50, 12.00 etc
for (const item of weeklyExpenses) {
    console.log(item);
}

console.log("for...in iteration:");//outputs index - 0, 1, 2 ...
for (const index in weeklyExpenses) {
    console.log(index);
}
//for of in js is similar to pythons for in, for in in js is indexes

*/
// 2.2
let budgetQueue = [120, 45, 15, 80];


// TODO 1: Add 60 to the end of budgetQueue
budgetQueue.push(60);
// TODO 2: Add 200 to the start of budgetQueue
budgetQueue.unshift(200);
// TODO 3: Remove the last element and store it in 'lastRemoved'
let lastRemoved = budgetQueue.pop();
// TODO 4: Remove the first element from budgetQueue
budgetQueue.shift();
// TODO 5: Use splice() at index 2 to remove 1 element (15) and insert 10 and 5
budgetQueue.splice(2,15, 10 , 5)
// TODO 6: Use forEach() to calculate the sum of all remaining elements in budgetQueue

let totalExpenses = 0;



// Write your forEach loop here:
budgetQueue.forEach((element) => totalExpenses+= (element));

console.log("Updated Budget Queue:", budgetQueue);
console.log("Total Expenses calculated via forEach:", totalExpenses);

console.log(budgetQueue[10]); // undefined
//in larger calculations it could throw off the calculation of an average, there would be an element counted as 0 and throw off the mean
