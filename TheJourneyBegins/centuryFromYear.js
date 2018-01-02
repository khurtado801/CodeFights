function centuryFromYear(year) {
    if (year % 100 == 0) {
        year = year / 100;
    } else {
        year = Math.floor((year / 100) + 1);
    }
    return year;
};
console.log(centuryFromYear(1905));

for (let i = 0; i < str.length; i++) {
    let first = str[i].toLowerCase();
    let last = str[str.length - 1 - i].toLowerCase();
    if (first !== last) {
        return false;
    }
}
return true;