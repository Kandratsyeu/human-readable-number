module.exports = function toReadable(number) {
    let strNumbers = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        15: "fifteen",
        18: "eighteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        80: "eighty",
    };
    function getTwoDigitNumber(n = number % 100) {
        switch (true) {
            case n in strNumbers:
                return strNumbers[n];
                break;
            case n < 20:
                return `${strNumbers[n % 10]}teen`;
                break;
            case (n % 100) - (n % 10) in strNumbers:
                return `${strNumbers[(n % 100) - (n % 10)]} ${
                    strNumbers[n % 10]
                }`;
                break;
            case n % 10 == 0:
                return `${strNumbers[Math.floor(n / 10) % 10]}ty`;
                break;
            default:
                return `${strNumbers[Math.floor(n / 10) % 10]}ty ${
                    strNumbers[n % 10]
                }`;
        }
    }
    if (number < 100) {
        return getTwoDigitNumber();
    } else if (number % 100 == 0) {
        return `${getTwoDigitNumber(Math.floor(number / 100))} hundred`;
    } else {
        return `${getTwoDigitNumber(
            Math.floor(number / 100)
        )} hundred ${getTwoDigitNumber(number % 100)}`;
    }
    return;
};
