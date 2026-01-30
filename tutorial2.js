"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const printID = (id) => {
    console.log("ID: " + id);
};
printID(23232323);
const signContract = (employee) => {
    console.log("contract signed by " + employee.name + " with email: " + employee.email);
};
signContract({ name: "Jerry", creditScore: 800, id: 34, email: "j@gmail.com" });
//# sourceMappingURL=tutorial2.js.map