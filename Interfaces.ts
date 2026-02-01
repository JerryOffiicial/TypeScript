interface User {
    name: string,
    age: number,
    address: string
}

const user: User = {
    name: "Jerry",
    age: 22,
    address: "31.22j3213n1"
}

console.log(user)


//
interface Rectangle {
    height: number,
    width: number
}

interface ColoredRectangle extends Rectangle {
    color: string
}

const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red"
};

console.log(coloredRectangle)