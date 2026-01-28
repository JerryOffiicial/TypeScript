let id: number = 5;
let company: string = "Acne Corp";
let isPublished: boolean = true;

let ids: number[] = [1, 2, 3, 4, 5];
let x: any = "pedro"
let xArr: any[] = ["pedro", 0, true]


//2nd

const concatenateValues = (a: string, b: string): string => {
    return a + b;
}

console.log(concatenateValues("Hello", "world"))
console.log(concatenateValues("5", "10"))


//3rd
interface UserInterface {
    id: number;
    name: string,
    age?: number, //make it optional by using the ?
    greet(message: string): void
}

const User: UserInterface = {
    id: 1,
    name: "Jerry",
    greet(message) {
        console.log(message)
    }
}

if (!User.age) {
    console.log("No Age Of the User")
} else {
    console.log(User.age)
}


User.greet("Hello");

