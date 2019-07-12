/*
Let's remember the first coding challenge where Mark and John compared their BMIs. 
Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and 
also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name 
and the respective BMI. Don't forget they might have the same BMI.
Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
GOOD LUCK 😀
*/

let john = {
    firstName: 'John',
    lastName: 'Cena',
    mass: 90, // in kg
    height: 1.78, // in meter
    calcBMI: function(){
        return this.bmi = this.mass / (this.height ** 2)
    }

}

let mark = {
    firstName: 'Mark',
    lastName: 'Price',
    mass: 75, // in kg
    height: 1.68, // in meter
    calcBMI: function(){
        return this.bmi = this.mass / (this.height ** 2)
    }

}


if (john.calcBMI() > mark.calcBMI()){
    console.log(`${john.firstName} ${john.lastName}'s BMI ${john.bmi} is higher than ${mark.firstName} ${mark.lastName}'s BMI ${mark.bmi}`)
} else if(mark.calcBMI() > john.calcBMI()){
    console.log(`${mark.firstName} ${mark.lastName}'s BMI ${mark.bmi} is higher than ${john.firstName} ${john.lastName}'s BMI ${john.bmi}`)
} else {
    console.log(`both have same bmi ${john.bmi}, ${mark.bmi}`)
}
