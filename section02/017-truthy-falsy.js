// falsy values null, 0, undefined, NaN
// kalau misalkan nilai variable adalah 0, dan itu masuk ke if caranya gimana?
// misal height = 0
let height = 16 - 16
if(height || height === 0){
    // dia akan masuk ke if, bukan falsy values
    console.log('truthy values')
} else {
    console.log('Contoh falsy values')
}