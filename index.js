
var romanToNum = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
};
var romanToInt = (e) => {
    newValue = 0;
    for (let i = 0; i < e.length; i++) {
        romanToNum[e[i]] < romanToNum[e[i + 1]]
            ? (newValue -= romanToNum[e[i]])
            : (newValue += romanToNum[e[i]])
    }
    document.getElementById('numberInput2').value = newValue;
    return newValue;
}

document.getElementById('convert2').addEventListener('click', function () {
    let romanLetter = document.getElementById('romanInput2').value;

    romanToInt(romanLetter);
})

// convert number to roman
console.log(" number to roman =============")

convertToRoman = (num) => {

    var roman = "";
    for (var key in romanToNum) {
        console.log("key: ", key)
        console.log("value: ", romanToNum[key])
        while (num >= romanToNum[key]) {
            roman += key;
            num -= romanToNum[key]
            console.log(`num is decreased :  ${num}`)
        }
    }
    document.getElementById('romanInput').value = roman;
}
console.log(`Roman number is: ${convertToRoman(15)}`)

document.getElementById('convert').addEventListener('click', function () {

    let number = document.getElementById("numberInput").value;
    convertToRoman(number);
})
