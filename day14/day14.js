// Day 14: Classes

// Activity 1: Class Definition

// Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.
class Person{
    constructor(fname,lname,age){
        this.fname = fname;
        this.age = age;
        this.lname = lname;
    }
    
    greeting(){
        return `Greetings from ${this.fname}`;
    }

    updateAge(newAge){
        this.age = newAge;
        console.log("new age =", newAge);
    }
    static gen_greet(){
        return `Greeting under static method`;
    }
    
    get fullname(){
        return `${this.fname} ${this.lname} `
    }
    set change_fName(newName) {
        this.fname = newName;
    }
    set change_lName(nlname){
        this.lname = nlname;
    }
}

p1 =new Person('Blake','Mason',20);
console.log(p1.greeting());

// Task 2: Add a method to the Person class that updates the age property and logs the updated age.

console.log("Existing age =",p1.age);
p1.updateAge(13);

// Activity 2: Class Inheritance

// Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID.
class Student extends Person{
    static totalStud = 0;
    constructor(fname,age,lname,studentId){
        super(fname,age,lname);
        this.studentId = studentId;
        Student.totalStud++;
    }

    giveStudId(){
        return this.studentId;
    }

    greeting(){
        return `Hello ${this.fname}, your studentId is ${this.studentId}`;
    }

}
s1 =new Student("Akash",'Rama',20,123);
console.log(s1.giveStudId());

// Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.
console.log(s1.greeting());

// Activity 3: Static Methods and Properties

// Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.
console.log(Person.gen_greet());

// Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
console.log(Student.totalStud);

// Activity 4: Getters and Setters

// Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter.

console.log(p1.fullname);

// Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName ). Update the name using the setter and log the updated full name.
p1.change_fName = "Jeff";
p1.change_lName = "Bar";
console.log(p1.fullname);

// Activity 5: Private Fields (Optional)

// Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.
class Account {
    #balance;

    constructor(initialBalance = 0) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount < 0) {
            throw new Error("Deposit amount cannot be negative");
        }
        this.#balance += amount;
    }

    withdraw(amount) {
        if (amount < 0) {
            throw new Error("Withdrawal amount cannot be negative");
        }
        if (amount > this.#balance) {
            throw new Error("Insufficient balance");
        }
        this.#balance -= amount;
    }

    getBalance() {
        return this.#balance;
    }
}

acc =new Account(5000);
acc.withdraw(2000);
console.log( acc.getBalance());

// Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.
