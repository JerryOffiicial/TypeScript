type carYear = number;
type carType = string;
type carModel = string;

type Car = {
    year: carYear,
    type: carType,
    model: carModel
}

const carYear: carYear = 2000;
const carType: carType = "Audi";
const carModel: carModel = "Godzi"

const car: Car = {

    year: carYear,
    type: carType,
    model: carModel
}

console.log(car)