var m="73197";
console.log(removeDigit(m,'7'));

function removeDigit(number, digit) {
    // edge case if last number is digit then return substring 
    //if (number[number.length-1]==digit) return number.substring(0,number.length-1);
    var canditate=-1;

    for (let i=0;i<number.length-1;i++) {
        if (number[i]==digit) {
            canditate=i;
            if (number[i]<number[i+1])
                return number.slice(0,canditate)+number.slice(canditate+1,number.length);
        }
        
    }
    if (number[number.length-1]==digit) canditate=number.length-1;
    return number.slice(0,canditate)+number.slice(canditate+1,number.length);

};