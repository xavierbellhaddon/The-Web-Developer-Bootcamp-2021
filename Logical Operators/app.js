// const password = prompt("Enter your password");

// if (password.length >= 6 && password.indexOf(" ") === -1) {
//     console.log("VALID PASSWORD!");
// } else {
//     console.log("INCORRECT FORMAT!");
// }

// const age = 50;

// if ((age < 5 && age >= 0) || age >= 65) {
//     console.log("FREE");
// } else if (age >= 5 && age < 10) {
//     console.log("$10");
// } else if (age >= 10 && age < 65) {
//     console.log("$20");
// } else {
//     console.log("INVALID AGE!")
// }

// let firstName = prompt("Enter your first name");

// if (!firstName) {
//     prompt("Try again");
// }

const age = 8;

if (!(age >= 0 && age < 5 || age >= 65)) {
    console.log("You are not a baby or a senior!")
}