"use strict";
// List of contacts
let contacts = [
    {
        name: "John Black",
        age: 30,
        address: "Amazing Street, 123",
        phone: "1234-5678"
    },
    {
        name: "Mary White",
        age: 28,
        address: "Beautiful Street, 456",
        phone: "9876-5432"
    },
    {
        name: "Charles Green",
        age: 35,
        address: "Capital Street, 789",
        phone: "5555-1234"
    }
];
// Adding the ages of contacts
let totalAge = contacts.reduce((sum, contact) => sum + contact.age, 0);
console.log("Sum of ages:", totalAge);
// Associate name and age
contacts.forEach(contact => {
    console.log(`${contact.name} have ${contact.age} years.`);
});
// Checking if any contact is over 30 years old
contacts.forEach(contact => {
    if (contact.age > 30) {
        console.log(`${contact.name} With more than 30 years.`);
    }
});
// Accessing the first contact
console.log("First contact:", contacts[0]);
// Displaying the number of contacts
console.log("Number of contacts:", contacts.length);
// Adding and removing properties
contacts[0].phone = "1234-5678";
console.log(contacts);
// Drawing a random number from a contact
let randomContactIndex = Math.floor(Math.random() * contacts.length);
console.log("Random contact:", contacts[randomContactIndex].name);
// Displaying the execution date and time
let currentDate = new Date();
console.log("Current date and time:", currentDate.toString());
