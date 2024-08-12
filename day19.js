// Day 19: Regular Expressions

// Activity 1: Basic Regular Expressions

// Task 1: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches.
let str = "JavaScript is fun.";
let regex = /JavaScript/g;
let matches = str.match(regex);
console.log(matches);

// Task 2: Write a regular expression to match all digits in a string. Log the matches.
let str1 = "java123script456@gmail.com";
let regex1 = /\d/g;
let matches1 = str1.match(regex1);
console.log(matches1);

// Activity 2: Character Classes and Quantifiers

// Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.
let capstr = "Heyy, nice to Meet you Mark."
let regex2 = /\b[A-Z][a-z]*\b/g;
let matches2 = capstr.match(regex2);
console.log("Matches:", matches2);

// Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.
let str3 = "Hello123World456abc789def";
let regex3 = /\d+/g;
let matches3 = str3.match(regex3);
console.log("Matches:", matches3);

// Activity 3: Grouping and Capturing

// Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890). Log the captures.
let str4 = "(123) 456-7890";
let regex4 = /\((\d{3})\)\s(\d{3})-(\d{4})/;
let match4 = str4.match(regex4);
if (match4) {
        console.log("Area Code:", match4[1]);
        console.log("Central Office Code:", match4[2]);
        console.log("Line Number:", match4[3]);
} 
else {
        console.log("No match found.");
}

// Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.
let str5 = "john.doe@example.com";
let regex5 = /(.*)@(.*)/;
let match5 = str5.match(regex5);
if (match5) {
        console.log("Username:", match5[1]);
        console.log("Domain:", match5[2]);
}
else {
        console.log("No match found.");
}

// Activity 4: Assertions and Boundaries

// Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.
let str6 = "First word is printed"
let regex6 = /^First/i
let match6 = str6.match(regex6);
console.log("Matches:", match6);

// Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.
let str7 = "First word is printed"
let regex7 = /First$/i
let match7 = str7.match(regex7);
console.log("Matches:", match7);

// Activity 5: Practical Applications

// Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.
let str8 = "First word is printed"
let regex8 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
let match8 = str8.match(regex8);
console.log("Matches:", match8);

// Task 10: Write a regular expression to validate a URL. Log whether the URL is valid.
const testurl = /^(https?:\/\/)?((([a-zA-Z0-9\-]+\.)+[a-zA-Z]{2,})|localhost)(:\d{1,5})?(\/[^\s]*)?$/;
const url10="https://github.com/ANUBHAVDIXIT2004/30daysOfJs";
const isValid = testurl.test(url10);
if (isValid) {
    console.log("URL is valid.");
  } else {
    console.log("URL is not valid.");
}