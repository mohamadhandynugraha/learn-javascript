// objects
// objectts literal

let john = {
    firstName: 'John',
    lastName: 'Cena',
    isMarried: true,
    hobbies: ['watch anime', 'review netflix', 'play football'],
    job: 'teacher',
    birthYear: 1990,
    // method
    calcAge: function(yearNow){
        this.age = yearNow - this.birthYear
    },
    getAge: function(){
        return this.age
    }

}

console.log(john)

// dot notation
console.log(john.hobbies[2])

// ganti value 
john.job = 'freelance'
console.log(john)


john.calcAge(2019)
console.log(john.age)
console.log(john)