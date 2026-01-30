// unauthorized. user doesn't exist, wrong credentials, internal
enum LoginError {
    Unauthorized = "unauthorized",
    NoUser = "nouser",
    WrongCredentials = 'wrongcredentials',
    Internal = 'internal'
}

const printErrorMsg = (error: LoginError) => {
    if (error == LoginError.Unauthorized) {
        console.log("User not authorized")
    } else if (error == LoginError.NoUser) {
        console.log("No user was found with that username")
    } else if (error == LoginError.WrongCredentials) {
        console.log("Wrong username/password combination")
    } else {
        console.log("Internal Error.")
    }
}

printErrorMsg(LoginError.NoUser);