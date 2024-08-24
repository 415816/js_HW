// Objective: Understand how to define a class and create an instance.
// Define a class called Person.
// Add a constructor that takes name and age as parameters and sets them as properties of the class.
// Create an instance of the Person class and log the instance to the console.
// Create an instance of the Person class
//const person1 =
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age
//     }
// }
// const person1 = new Person("Tolya", 20)
// console.log(person1);

// Task 2: Adding Methods
// Objective: Learn how to add methods to a class.
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     return `Hello, my name is ${this.name}`;
//   }
// }
// Add a method called greet to the Person class that returns a greeting string including the person's name.
// Call the greet method on an instance of the Person class and log the result to the console.
// Create an instance of the Person class
// const person1 = new Person("Bob", 25);
// console.log(person1.greet());

// Task 3: Inheritance
// Objective: Understand how to use inheritance in classes.
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     return `Hello, my name is ${this.name}`;
//   }
// }
// Define a class called Student that inherits from the Person class.
// Add a constructor to the Student class that takes name, age, and studentID as parameters.
// Call the parent class's constructor for name and age.
// Add a method to the Student class called "study" that returns a string indicating that the student is studying.

// class Student extends Person {
//   constructor(name, age, studentID) {
//     super(name, age);
//     this.studentID = studentID;
//   }
//   study() {
//     return `${this.name} is studying`;
//   }
// }

// const student1 = new Student("Charlie", 20, "S12345");
// console.log(student1.greet());
// console.log(student1.study());

// Task 4: Static Methods
// Objective: Learn how to add static methods to a class.
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   static compareAges(personA, personB) {
//     if (!(personA instanceof Person && personB instanceof Person) ) {
//         throw new Error("Objects should be instance of Person")
//     }
//     if (personA.age > personB.age) {
//       return personA.name;
//     } else if (personA.age < personB.age) {
//       return personB.name;
//     } else {
//       return "equal";
//     }
//   }
// }
// Add a static method called compareAges to the Person class that takes two instances of Person
// and returns the name of the older person.
// Use this static method to compare the ages of two Person instances and log the result to the console.
// Create instances of the Person class
// const person1 = new Person("David", 30);
// const person2 = new Person("Eve", 25);
// // Compare ages
// console.log(Person.compareAges(person1, person2));

// Task 5: Getters and Setters
// Objective: Learn how to use getters and setters in a class.
class Person {
    #name;
    constructor(name, age) {
      this.#name = name;
      this.age = age;
    }
    get name() {
        return this.#name
    }

    set name(newName) {
       this.#name = newName;
       console.log(`new name : ${this.#name}`);
    }
  }
  // Add a getter for the name property in the Person class.
  // Add a setter for the name property in the Person class that logs a message when the name is set.
  // Use the getter and setter on an instance of the Person class and log the result to the console.
  // Create an instance of the Person class
  const person1 = new Person("Frank", 35);
  console.log(person1.name);
  // Set a new name
  person1.name = "George";
  console.log(person1.name);
  //solve problem with ability to change _name property by passing a value directly


