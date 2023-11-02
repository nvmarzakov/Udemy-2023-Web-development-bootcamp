function lifeInWeeks(age) {
    let live = 90;
    let liveLeft = live - age
    let days = liveLeft * 365;
    let weeks = liveLeft * 52;
    let months = liveLeft * 12;

    console.log(`You have ${days} days, ${weeks} weeks, and ${months} months left.`)
}

lifeInWeeks(56);
