1️⃣ Basic Type Annotations
let id: number = 5;
let company: string = "Acne Corp";
let isPublished: boolean = true;

What’s happening?

You’re explicitly telling TypeScript what type of data each variable can hold.

number → only numbers

string → text

boolean → true or false

Why this matters

TypeScript will stop bugs early:

id = "hello" ❌ // error
company = 123 ❌ // error

2️⃣ Arrays with Types
let ids: number[] = [1, 2, 3, 4, 5];


This means:

ids is an array

It can contain only numbers

ids.push(6)      ✅
ids.push("abc") ❌

3️⃣ The any Type (⚠️ Use carefully)
let x: any = "pedro"
let xArr: any[] = ["pedro", 0, true]

What is any?

any disables TypeScript’s type checking.

x can become anything

xArr can contain mixed types

Why it’s dangerous
x = 10
x = true
x = {} // no errors 😬


👉 Use any only when necessary (APIs, legacy code).

4️⃣ Functions with Typed Parameters & Return Type
const concatenateValues = (a: string, b: string): string => {
    return a + b;
}

Breakdown

a: string, b: string → function accepts only strings

: string → function must return a string

concatenateValues("Hello", "world") // "Helloworld"
concatenateValues("5", "10")        // "510"


⚠️ Numbers are not allowed:

concatenateValues(5, 10) ❌

5️⃣ Interfaces (Object Structure)
interface UserInterface {
    id: number;
    name: string;
    age?: number;
    greet(message: string): void;
}

What is an interface?

An interface defines the shape of an object.

Important parts

age?: number → optional property

greet() → function inside an object

void → function returns nothing

6️⃣ Using the Interface
const User: UserInterface = {
    id: 1,
    name: "Jerry",
    greet(message) {
        console.log(message)
    }
}


TypeScript checks:

Required properties exist (id, name, greet)

Types are correct

7️⃣ Optional Properties Check
if (!User.age) {
    console.log("No Age Of the User")
} else {
    console.log(User.age)
}


Since age is optional:

It may be undefined

You must check before using it

Good TS practice ✅

8️⃣ Calling Object Methods
User.greet("Hello");


Calls the greet function

Matches greet(message: string): void

ADVANCED TYPES
9️⃣ Type Alias
type IDFieldType = string | number

What is this?

A custom type name.

This means:

IDFieldType = string OR number

🔟 Union Types
const printID = (id: IDFieldType) => {
    console.log("ID: " + id)
}


The function accepts:

string

number

printID(23232323)  ✅
printID("ABC123") ✅
printID(true)     ❌

1️⃣1️⃣ Interfaces for Multiple Structures
interface BusinessPartner {
    name: string;
    creditScore: Number;
}

interface userIdentity {
    id: number;
    email: string;
}


These represent two separate concerns:

Business info

Identity info

1️⃣2️⃣ Intersection Types (&)
type Employee = BusinessPartner & userIdentity

Meaning

An Employee must have:

name

creditScore

id

email

It combines both interfaces.

1️⃣3️⃣ Function Using Intersection Type
const signContract = (employee: Employee): void => {
    console.log(
      "contract signed by " + employee.name + 
      " with email: " + employee.email
    )
}


Only works if the object satisfies both interfaces.

1️⃣4️⃣ Valid Function Call
signContract({
  name: "Jerry",
  creditScore: 800,
  id: 34,
  email: "j@gmail.com"
})


If any property is missing → ❌ TypeScript error

🔥 Big Picture Summary
Concept	Purpose
Type annotations	Prevent wrong values
Arrays with types	Enforce consistent data
any	Escape hatch (use rarely)
Interfaces	Define object shape
Optional props (?)	Handle missing data safely
Type aliases	Reusable custom types
Union (`	`)
Intersection (&)	Combine multiple types