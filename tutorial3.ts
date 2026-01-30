// ENUM
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


//Generics

class StorageContainer<T> {
    private contents: T[]

    constructor() {
        this.contents = [];
    }

    addItem(item: T): void {
        this.contents.push(item)
    }

    getItem(idx: number): T | undefined {
        return this.contents[idx];
    }
}

const username = new StorageContainer<string>();
username.addItem("Jerry");
username.addItem("hiiii");
username.addItem("dadwdawd");
username.addItem("Jedwddawdarry");
console.log(username.getItem(3));

const friendsCount = new StorageContainer<number>();
friendsCount.addItem(32);
friendsCount.addItem(121);
friendsCount.addItem(233);
friendsCount.addItem(82);
console.log(friendsCount.getItem(1));


// Read only variables

interface Employee {
    readonly emploeeId: number; // now we can't assign it in outside the object
    readonly startDate: Date;

    name: string,
    department: string
}

const employee: Employee = {
    emploeeId: 123,
    startDate: new Date(),
    name: "Jerry",
    department: "Finanace"
}

employee.name = "jj"

console.log(employee)
