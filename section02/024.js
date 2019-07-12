function simpleTipCalculator(bill){
    let tip = 0
    switch(true){
        case bill > 0 && bill < 50:
            tip = bill * 0.2
            break;
        case bill >= 50 && bill <= 200:
            tip = bill * .15
            break;
        default:
            tip = bill * .1

    }
    console.log(tip)
}

simpleTipCalculator(124)
simpleTipCalculator(48)
simpleTipCalculator(268)
simpleTipCalculator(-268)