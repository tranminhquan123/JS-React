const numbersOne = [1,2,3];
const numbersTwo = [4,5,6];

const numbersConbined = [...numbersOne, ...numbersTwo]
const numberConbined = [...numbersTwo, ...numbersOne]

const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
}

const updateVehicle = {
    type: 'car',
    year: '2021',
    color: 'yellow'
}

const update = {...myVehicle, ...updateVehicle}
console.log(update );
