module.exports = function toReadable(number) {
    let obj1 = {
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
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen"
    }

    let obj2 = {
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",

    }
    let hundred = "hundred";
    let first = "";
    let ten = "";
    let ten2 = "";
    let last = "";
    let result = "";
    if (number < 20) {
        result = obj1[number];
        return result;
    }
    if (number >= 20 && number < 100) {
        if (number % 10 === 0) {
            result = obj2[number]
            return result;
        } else {
            ten = number - number % 10;
            last = number % 10;
            result = obj2[ten] + " " + obj1[last];

            return result;
        }
    }
    if (number > 99) {
        if (number % 100 === 0) {
            first = number / 100;
            result = obj1[first] + " " + hundred;
            return result;
        }
        if (number % 100 > 0) {
            first = Math.floor(number / 100);
            ten = number % 100;
            if (ten % 10 === 0 && ten >= 20) {
                result = obj1[first] + " " + hundred + " " + obj2[ten];
                return result;
            } else if (ten <= 10 || ten < 20) {
                result = obj1[first] + " " + hundred + " " + obj1[ten];
                return result;
            } else {
                ten2 =  ten - ten % 10;
                last = ten % 10;
                result = obj1[first] + " " + hundred + " " + obj2[ten2] + " " + obj1[last];
                return result;
            }

        }
    }
}
