//your JS code here. If required.
function daysOfAYear(year){
    if(isLeapYear(year))
        return 366;
    else
        return 365;
}

function isLeapYear(y){
    if(y%4==0){
        if(y%100==0){
            if(y%400==0)
                return 1;
            else
                return 0;
        }
        else
            return 1;
    }
    else
        return 0;
}
