function isLeapYear (year) {

    const leapYear = 'Leap year.'
    const notLeapYear = 'Not leap year.'

    if (year % 4 === 0 ){

        if (year % 100 === 0) {

            if (year % 400 === 0) {
                console.log(leapYear);
            } else {
                console.log(notLeapYear);
            }

        } else {
            console.log(leapYear);
        }

    } else {
        console.log(notLeapYear);
    }

}

let result = isLeapYear(1948);
