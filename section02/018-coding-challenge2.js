/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
GOOD LUCK 😀
*/

let avgjohnTeam = (97 + 134 + 105) / 3, avgMarkTeam = (89 + 120 + 103) / 3
let avgMarryTeam = (116 + 94 + 123) / 3
console.log(avgMarryTeam, avgMarkTeam, avgjohnTeam)
switch(true){
    case avgjohnTeam > avgMarkTeam && avgjohnTeam > avgMarryTeam:
        console.log(`John's team is higher avg score ${avgjohnTeam} than marks avg score ${avgMarkTeam} and marry avg score ${avgMarryTeam}`)
        break
    case avgMarryTeam > avgMarkTeam && avgMarryTeam > avgjohnTeam:
        console.log(`Marry's team is higher avg score ${avgMarryTeam} than marks avg score ${avgMarkTeam} and johns avg score ${avgjohnTeam} `)
        break
    case avgjohnTeam === avgMarkTeam && avgMarkTeam === avgMarryTeam:
        console.log(`Draw with avg Score for all team ${avgjohnTeam}, ${avgMarkTeam}, ${avgMarryTeam}`)
        break
    default:
        console.log(`Mark's team is higher avg score ${avgMarkTeam} than john avg score ${avgjohnTeam} and avg marry score ${avgMarryTeam}`)

}