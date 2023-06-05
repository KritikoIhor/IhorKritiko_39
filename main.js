class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    humanInfo(name, age) {
        console.log('Name:', this.name, ',', 'age:', this.age);
    }
}

class Car {
    owner = '';
    constructor(brand, model, yearOfIssue, licensePlate) {
        this.brand = brand;
        this.model = model;
        this.yearOfIssue = yearOfIssue;
        this.licensePlate = licensePlate;
    }

    addOwner(owner) {
        const ageLimit = 18;
        if (owner.age < ageLimit) {
            console.log(`The ${owner.name} is under ${ageLimit} years old`);
        } else {
            this.owner = owner;

        }
    }

    carInfo() {
        console.log(`Brand : ${this.brand}, Model : ${this.model}, Year of issue : ${this.yearOfIssue}, License plate : ${this.licensePlate}`);
        
        if (this.owner) {
            this.owner.humanInfo();
        } else {
            console.log('No owner information available');
        }
    }
}

const personOne = new Human('Andre', 11);
const personTwo = new Human('Emma', 66);
const personThree = new Human('Ihor', 28);

personOne.humanInfo();
personTwo.humanInfo();
personThree.humanInfo();

console.log('-----------------------');

const firstCar = new Car('Toyota', 'Land Cruiser', '2022', 'MILFHunter');
const secondCar = new Car('MINI', 'Cooper', '2018', 'BadGirl');
const thirdCar = new Car('Volkswagen','ID4','2020' , 'YY123BH')

firstCar.addOwner(personOne);
secondCar.addOwner(personTwo);
thirdCar.addOwner(personThree);

// console.log(firstCar);
// console.log(secondCar);
// console.log(thirdCar);

firstCar.carInfo();
secondCar.carInfo();
thirdCar.carInfo();