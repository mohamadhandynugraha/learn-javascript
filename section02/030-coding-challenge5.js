/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!
This time, John and his family went to 5 different restaurants. 
The bills were $124, $48, $268, $180 and $42.

John likes to tip 20% of the bill when the bill is less than $50, 
15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
Implement a tip calculator using objects and loops:

1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, 
and 2) an array containing final paid amounts (bill + tip). 

HINT: Start with two empty arrays [] as properties and then fill them up in the loop.
EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. 

The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 
10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).
5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. 
HINT: Loop over the array, and in each iteration store the current sum in a 
variable (starting from 0). After you have the sum of the array, 
divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average
GOOD LUCK 😀
*/

function TipCalculator(fullName, bills, tips = [], finalPaidAmounts = []){
    this.fullName = fullName
    this.bills = bills
    this.tips = tips
    this.finalPaidAmounts = finalPaidAmounts
    this.calcTip = function(percentageArray, amountArray){
        this.bills.forEach(element => {
            let tip = 0
            if(element < amountArray[0]){
                tip = element * percentageArray[0] 
            } else if(element <= amountArray[1]){
                tip = element * percentageArray[1] 
            } else {
                tip = element * percentageArray[2] 
            }
            this.tips.push(tip)
            this.finalPaidAmounts.push(tip + element)
        })
    }
}

function averageTips(tips){
    let avg = 0
    tips.forEach(element => {
        avg += element
    })
    avg /= tips.length
    return avg
}

let john = new TipCalculator('John Cena', [124, 48, 268, 180, 42])
let mark = new TipCalculator('Mark Price', [77, 475, 110, 45])

john.calcTip([.2, .15, .1], [50, 200])
mark.calcTip([.2, .1, .25], [100, 300])

console.log(john)
console.log(mark)

// siapa yang paling besar average tipsnya?
if(averageTips(john.tips) > averageTips(mark.tips)){
    console.log(`${john.fullName} is more avg tips $${averageTips(john.tips)} than ${mark.fullName} with $${averageTips(mark.tips)}`)
} else if (averageTips(john.tips) < averageTips(mark.tips)){
    console.log(`${mark.fullName} is more avg tips $${averageTips(mark.tips)} than ${john.fullName} with $${averageTips(john.tips)}`)
} else {
    console.log(`Both have same avg tips $${averageTips(john.tips)} $${averageTips(mark.tips)}`)
}
