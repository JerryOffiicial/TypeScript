type IDFieldType = string | number //type Alias

const printID = (id: IDFieldType) => { //union
    console.log("ID: " + id)
}

printID(23232323)

interface BusinessPartner {
    name: string;
    creditScore: Number
}

interface userIdentity {
    id: number;
    email: string;
}

type Employee = BusinessPartner & userIdentity //intersections

const signContract = (employee: Employee):void => {
    console.log("contract signed by " + employee.name + " with email: " + employee.email)
}

signContract({name: "Jerry", creditScore: 800, id: 34, email: "j@gmail.com"})