var printID = function (id) {
    console.log("ID: " + id);
};
printID(23232323);
var signContract = function (employee) {
    console.log("contract signed by " + employee.name + " with email: " + employee.email);
};
signContract({ name: "Jerry", creditScore: 800, id: 34, email: "j@gmail.com" });
