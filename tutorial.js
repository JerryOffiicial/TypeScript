var id = 5;
var company = "Acne Corp";
var isPublished = true;
var ids = [1, 2, 3, 4, 5];
var x = "pedro";
var xArr = ["pedro", 0, true];
//2nd
var concatenateValues = function (a, b) {
    return a + b;
};
console.log(concatenateValues("Hello", "world"));
console.log(concatenateValues("5", "10"));
var User = {
    id: 1,
    name: "Jerry",
    greet: function (message) {
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
