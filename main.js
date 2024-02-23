let raceNumber = Math.floor(Math.random() * 1000);
let regEarly = false
const runnerAge = prompt('What is your age?')

if (regEarly === true && runnerAge > 18) {
    console.log(`Your race will begin at 9.30 am and your racenumber is ${raceNumber+1000}`)
}
else if (regEarly != true && runnerAge > 18) {
    console.log(`Late adults run at 11:00 am. Your racenumber is ${raceNumber}`)
}
else if (runnerAge <=18) {
    console.log(`Your race will begin at 12:30PM. Your racenumber is ${raceNumber}`)
}
