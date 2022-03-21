const leapYears = function(year) {

    
    if (year%100==0 && year%400==0) { //if divisible by 100 and 400 then leap year
        return true;
    } else if(year%100==0 && year%400!=0){ //if divisible by 100 and not 400 then not leap year
        return false;
    } else if(year%4 == 0) {//if divisible by 4 then leap year
        return true;
    } else { //else then false
        return false; 
    } 

};

// Do not edit below this line
module.exports = leapYears;
