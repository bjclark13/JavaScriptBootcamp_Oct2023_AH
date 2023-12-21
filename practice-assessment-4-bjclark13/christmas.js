// Get the days until Christmas

// what should the type of date be?
function getDaysTilChristmas(date) {
    // convert the date to a number2
    const dateAsNum = date.getDate();
    // convert christmas to a number
    const christmasAsNum = new Date('12-25-2023')
    // subtract

    return (christmasAsNum - dateAsNum) * 1000 * 24 * 60 
    // return that in days
}


getDaysTilChristmas('12-01-2023')
getDaysTilChristmas(new Date('12-01-2023'))
getDaysTilChristmas(1702511194)