# TypeScript Core Concepts (Notes)

---

## 1️⃣ Basic Type Annotations

```ts
let id: number = 5;
let company: string = "Acne Corp";
let isPublished: boolean = true;
```

### What’s happening?

You are explicitly telling **TypeScript what type of data each variable can hold**.

* `number` → only numbers
* `string` → text
* `boolean` → `true` or `false`

### Why this matters

TypeScript catches bugs **at compile time**:

```ts
id = "hello"    // ❌ error
company = 123    // ❌ error
```

---

## 2️⃣ Arrays with Types

```ts
let ids: number[] = [1, 2, 3, 4, 5];
```

### Meaning

* `ids` is an array
* It can contain **only numbers**

```ts
ids.push(6)      // ✅
ids.push("abc") // ❌
```

---

## 3️⃣ The `any` Type (⚠️ Use Carefully)

```ts
let x: any = "pedro";
let xArr: any[] = ["pedro", 0, true];
```

### What is `any`?

* Disables TypeScript’s type checking
* Variable can hold **any type**

```ts
x = 10;
x = true;
x = {}; // no error 😬
```

### Why it’s dangerous

* No safety
* No autocomplete
* Bugs appear at runtime

👉 Use `any` **only when unavoidable** (external APIs, legacy code).

---

## 4️⃣ Functions with Typed Parameters & Return Type

```ts
const concatenateValues = (a: string, b: string): string => {
  return a + b;
};
```

### Breakdown

* `a: string`, `b: string` → only strings allowed
* `: string` → function must return a string

```ts
concatenateValues("Hello", "world"); // "Helloworld"
concatenateValues("5", "10");        // "510"
concatenateValues(5, 10);               // ❌
```

---

## 5️⃣ Interfaces (Object Structure)

```ts
interface UserInterface {
  id: number;
  name: string;
  age?: number;
  greet(message: string): void;
}
```

### What is an interface?

An interface defines the **shape of an object**.

### Key points

* `age?: number` → optional property
* `greet()` → method definition
* `void` → no return value

---

## 6️⃣ Using the Interface

```ts
const User: UserInterface = {
  id: 1,
  name: "Jerry",
  greet(message) {
    console.log(message);
  }
};
```

TypeScript ensures:

* Required properties exist
* Types are correct

---

## 7️⃣ Optional Properties Check

```ts
if (!User.age) {
  console.log("No Age Of the User");
} else {
  console.log(User.age);
}
```

* Optional values may be `undefined`
* Always check before using

✅ Good TypeScript practice

---

## 8️⃣ Calling Object Methods

```ts
User.greet("Hello");
```

* Calls the method safely
* Matches `greet(message: string): void`

---

# ADVANCED TYPES

## 9️⃣ Type Alias

```ts
type IDFieldType = string | number;
```

* Creates a reusable custom type
* Represents **string OR number**

---

## 🔟 Union Types

```ts
const printID = (id: IDFieldType) => {
  console.log("ID: " + id);
};
```

```ts
printID(23232323);  // ✅
printID("ABC123"); // ✅
printID(true);      // ❌
```

---

## 1️⃣1️⃣ Multiple Interfaces

```ts
interface BusinessPartner {
  name: string;
  creditScore: number;
}

interface UserIdentity {
  id: number;
  email: string;
}
```

* Separate concerns
* Clean structure

---

## 1️⃣2️⃣ Intersection Types (`&`)

```ts
type Employee = BusinessPartner & UserIdentity;
```

An `Employee` **must contain all properties** from both interfaces.

---

## 1️⃣3️⃣ Function Using Intersection Type

```ts
const signContract = (employee: Employee): void => {
  console.log(
    "Contract signed by " + employee.name +
    " with email: " + employee.email
  );
};
```

---

## 1️⃣4️⃣ Valid Function Call

```ts
signContract({
  name: "Jerry",
  creditScore: 800,
  id: 34,
  email: "j@gmail.com"
});
```

Missing any property → ❌ TypeScript error

---

# PART 2

## 1️⃣ ENUMS

```ts
enum LoginError {
  Unauthorized = "unauthorized",
  NoUser = "nouser",
  WrongCredentials = "wrongcredentials",
  Internal = "internal"
}
```

### What is an enum?

A collection of **named constants**.

### Why enums?

* Prevent typos
* Better readability
* Autocomplete support
* Type safety

```ts
LoginError.NoUser // ✅
"nouusr"         // ❌
```

---

## 2️⃣ Function Using Enum

```ts
const printErrorMsg = (error: LoginError) => {
  // logic
};
```

* Accepts **only enum values**

```ts
printErrorMsg(LoginError.NoUser); // ✅
printErrorMsg("nouser");         // ❌
```

---

## 3️⃣ Enum Comparison Logic

```ts
if (error === LoginError.Unauthorized) {
  console.log("User not authorized");
}
```

Internally:

```ts
LoginError.NoUser === "nouser";
```

---

## 4️⃣ Real-World Enum Usage

* API error handling
* Status management
* Login / auth flows

---

## 5️⃣ GENERICS

### What is a Generic?

Generics allow **reusable, type-safe code** without fixing the type.

```ts
<T>
```

Meaning: *"Type will be provided later"*

---

## 6️⃣ Generic Class

```ts
class StorageContainer<T> {
  private contents: T[];

  constructor() {
    this.contents = [];
  }

  addItem(item: T): void {
    this.contents.push(item);
  }

  getItem(idx: number): T | undefined {
    return this.contents[idx];
  }
}
```

---

## 7️⃣ Using Generics (String)

```ts
const username = new StorageContainer<string>();
username.addItem("Jerry");
```

```ts
username.addItem(123); // ❌
```

Return type:

```ts
string | undefined
```

---

## 8️⃣ Using Generics (Number)

```ts
const friendsCount = new StorageContainer<number>();
friendsCount.addItem(32);
```

```ts
friendsCount.addItem("32"); // ❌
```

---

## 🔥 Why Generics Matter

### Without Generics ❌

```ts
contents: any[];
```

* No safety
* No autocomplete

### With Generics ✅

* One reusable structure
* Fully type-safe

Used heavily in:

* React (`useState<T>`)
* APIs
* Database models
* Utility libraries

---

## 🧠 Final Summary

| Concept              | Purpose                 |                   |
| -------------------- | ----------------------- | ----------------- |
| Type annotations     | Prevent wrong values    |                   |
| Arrays with types    | Consistent data         |                   |
| `any`                | Escape hatch (rare use) |                   |
| Interfaces           | Object structure        |                   |
| Optional props (`?`) | Safe missing values     |                   |
| Type aliases         | Reusable types          |                   |
| Union (`             | `)                      | One of many types |
| Intersection (`&`)   | Combine types           |                   |
| Enums                | Safe constants          |                   |
| Generics `<T>`       | Flexible & safe code    |                   |