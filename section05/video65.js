// pass functions as arguments
let years = [1990, 1965, 1945, 2005, 1998]

function arrayCalc(arr, fn){
    let arrayResult = []
    arr.forEach(element => {
        arrayResult.push(fn(element))
    });
    return arrayResult
}


// hitung ages
function calculateAges(age){
    return 2019 - age
}

// hitung umur dewasa (diatas 17 tahun)
function isFullAges(age){
    return age >= 17
}

// max heart rate
// menghitung heart rate antara umur 17 tahun sampai 81 tahun pada saat workout
function maxHeartRate(age){
    if(age >= 17 && age <= 81){
        return Math.round(206.9 - (0.67 * age))
    } else {
        return 'umur tidak cukup atau umur sudah senior'
    }
}

// invoke function
let ages = arrayCalc(years, calculateAges)
let dewasa = arrayCalc(ages, isFullAges)
let heart = arrayCalc(ages, maxHeartRate)


console.log(ages)
console.log(dewasa)
console.log(heart)