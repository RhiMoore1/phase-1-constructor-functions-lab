
function Scooter(year, color, model) {
    this.year = year;
    this.color = color;
    this.model = model;
}
const myScooter = new Scooter(2019, "red", "redwing")



class Driver {
    constructor(name, age, experience) {
        this.name = name;
        this.age = age;
        this.experience = experience;
    }
}
const myDriver = new Driver("ron", 31, "novice") 



function PickupLocation(address, city) {
    this.address = address;
    this.city = city;
}
const myPickUpLocation = new PickupLocation("111 Sue Ln", "Seattle")


