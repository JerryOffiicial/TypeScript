// ENUM
// unauthorized. user doesn't exist, wrong credentials, internal
var LoginError;
(function (LoginError) {
    LoginError["Unauthorized"] = "unauthorized";
    LoginError["NoUser"] = "nouser";
    LoginError["WrongCredentials"] = "wrongcredentials";
    LoginError["Internal"] = "internal";
})(LoginError || (LoginError = {}));
var printErrorMsg = function (error) {
    if (error == LoginError.Unauthorized) {
        console.log("User not authorized");
    }
    else if (error == LoginError.NoUser) {
        console.log("No user was found with that username");
    }
    else if (error == LoginError.WrongCredentials) {
        console.log("Wrong username/password combination");
    }
    else {
        console.log("Internal Error.");
    }
};
printErrorMsg(LoginError.NoUser);
//Generics
var StorageContainer = /** @class */ (function () {
    function StorageContainer() {
        this.contents = [];
    }
    StorageContainer.prototype.addItem = function (item) {
        this.contents.push(item);
    };
    StorageContainer.prototype.getItem = function (idx) {
        return this.contents[idx];
    };
    return StorageContainer;
}());
var username = new StorageContainer();
username.addItem("Jerry");
username.addItem("hiiii");
username.addItem("dadwdawd");
username.addItem("Jedwddawdarry");
console.log(username.getItem(3));
var friendsCount = new StorageContainer();
friendsCount.addItem(32);
friendsCount.addItem(121);
friendsCount.addItem(233);
friendsCount.addItem(82);
console.log(friendsCount.getItem(1));
var employee = {
    emploeeId: 123,
    startDate: new Date(),
    name: "Jerry",
    department: "Finanace"
};
employee.name = "jj";
console.log(employee);
