function getDateAfterOneDay(year, month, day) {
    let date = new Date(year, month-1, day);
    let dayInMilliseconds = 24 * 60 *60 * 1000;
    let nextDate = new Date(date.getTime() + dayInMilliseconds);

    console.log(nextDate.getFullYear() + '-' + (nextDate.getMonth() + 1) + '-' + nextDate.getDate());
}

getDateAfterOneDay(2016, 9, 30);