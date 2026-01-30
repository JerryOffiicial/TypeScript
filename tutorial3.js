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
