// loops
// for(let i = 1; i <= 10; i++){
//     console.log(i)
// }


// let john = ['test', false, true, 12, 10102, 'oke']
// for(let i = 0; i < john.length; i++){
//     if(typeof john[i] === 'string') console.log(john[i])
// }

// // temukan boolean, baru berhenti
// for(let i = 0; i < john.length; i++){
//     if(typeof john[i] === 'boolean') {
//         console.log(john[i])
//         break
//     } 
// }
let john = ['John', 'Smith', 1990, 'designer' , false, 'blue']
for(let i = john.length - 1; i >= 0; i--){
    console.log(john[i])
}