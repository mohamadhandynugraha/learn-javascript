// function constructor


// jadi sama kayak class di Java. Misal kita mau buat blueprint dari person
let Person = function(fullName, job, birthOfYear, mass, height){
    this.fullName = fullName
    this.job = job
    this.birthOfYear = birthOfYear
    this.mass = mass // in kg
    this.height = height // in meters
}

// buat method calculateBMI
Person.prototype.calculateBMI = function(){
    return (this.mass) / (this.height ** 2)
}

// buat method getProfile
Person.prototype.getProfile = function(){
    return `Hi, my name is ${this.fullName} my job is ${this.job} and I am ${2019 - this.birthOfYear} years old`
}

let john = new Person('John Cena', 'Entertainer', 1980, 100, 1.80)
let mark = new Person('Mark Price', 'Online Teacher', 1989, 89, 1.94)

console.log(`${john.fullName}'s BMI = ${john.calculateBMI()}`)
console.log(`${mark.fullName}'s BMI = ${mark.calculateBMI()}`)
console.log(john.getProfile())
console.log(mark.getProfile())

console.log(john)
console.log(Person instanceof Object)