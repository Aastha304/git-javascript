// DAY 3: Control statements

//Activity 1: if-else statements

// Task 1
let num=5;

if (num<0){
    console.log("Number is: negative");
}
else if (num>0){
    console.log("Number is: positive");
}
else{
    console.log("Number is: zero");
}
//Output: "Number is: positive"

//Task 2
let voter=19;

if (voter>=18){
    console.log("Voter: eligible");
}
else{
    console.log("Voter: not eligible");
}
//Output: Voter: eligible

//Activity 2: nested if-else statements

//Task 3
let n1=1;
let n2=2;
let n3=3;
max=null;
if (n1>=n2){
    if (n2>=n3)
        max=n1;
    else
        max=n2;
}
else{
    if(n2>=n3)
        max=n2;
    else
        max=n3;
}
console.log("The largest number: ",max); //Output: The largest number:3

//Activity 3: Switch case

// Task 4
let day=3;

switch(day){
    case 1: day="Monday";
    break;
    case 2: day="Tuesday";
    break;
    case 3: day="Wednesday";
    break;
    case 4: day="Thursday";
    break;
    case 5: day="Friday";
    break;
    case 6: day="Saturday";
    break;
    case 7: day="Sunday";
}
console.log("The day is:",day);
//Output: The day is: Wednesday

//Task 5
let grade=70;

switch(true){
    case (grade>=85):
        console.log("A");
        break;
    case (grade>=70): 
        console.log('B');
        break;
    case (grade>=50): 
        console.log('C');
        break;
    case (grade>=30): 
        console.log('D');
        break;
    default: console.log('E'); 
}
// Output: B

//Activity 4: conditional(ternary) operators

//Task 6
let n=9;
n%2==0?console.log("Even"):console.log("Odd");
//Output: Odd

//Activity 5: combining conditions

//Task 7
let year=2019;

if(year%400==0 || (year%4==0 && year%100!=0))
    console.log(year,"is a leap year");
else
    console.log(year,"is not leap year");




