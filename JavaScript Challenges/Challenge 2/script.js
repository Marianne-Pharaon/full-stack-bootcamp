let age1 = 18;
if (age1 >= 20) {
    console.log("You can enter the room")
}
else {
    console.log("You can't enter the room")
}

const expression1 = 5 > 3;
const expression2 = 10 === '10';
const expression3 = true && false;
const expression4 = !expression3;

console.log("expression1:", expression1);
console.log("expression2:", expression2);
console.log("expression3:", expression3);
console.log("expression4:", expression4);

const age2 = 25;
const hasDriverLicense = true;
const hasCar = false;

let canDrive = false;
if (age2 >= 18 && hasDriverLicense) {
    canDrive = true;
}

let canRentCar = false;
if (age2 >= 22 && hasDriverLicense && !hasCar) {
    canRentCar = true;
}

let needDriver = false;
if (age2 < 18 && !hasDriverLicense && !hasCar) {
    needDriver = true;
}

console.log("canDrive:", canDrive);
console.log("canRentCar:", canRentCar);
console.log("needDriver:", needDriver);

const role = "admin";
switch (role) {
    case "admin":
        console.log("You have read and write access for the data"); break;
    case "user":
        console.log("You have only read access for the data"); break;
    case "guest":
        console.log("You have no access for the data"); break;
    default:
        console.log("User role is not recoginized");
}