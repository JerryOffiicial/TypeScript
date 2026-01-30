"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let id = 5;
let company = "Acne Corp";
let isPublished = true;
let ids = [1, 2, 3, 4, 5];
let x = "pedro";
let xArr = ["pedro", 0, true];
//2nd
const concatenateValues = (a, b) => {
    return a + b;
};
console.log(concatenateValues("Hello", "world"));
console.log(concatenateValues("5", "10"));
const User = {
    id: 1,
    name: "Jerry",
    greet(message) {
        console.log(message);
    }
};
if (!User.age) {
    console.log("No Age Of the User");
}
else {
    console.log(User.age);
}
User.greet("Hello");
//# sourceMappingURL=tutorial.js.map