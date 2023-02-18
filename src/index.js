module.exports = function toReadable(number) {
    const singleNumbers = {
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
    };
    const belowTwentyNumbers = {
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };
    const dozensNumbers = {
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };
    let res = "";
    let num = number;
    if (num < 10) {
        return singleNumbers[num];
    } else if (num >= 10 && num < 20) {
        return belowTwentyNumbers[num];
    } else {
        while (num > 0) {
            if (num / 100 >= 1) {
                res += singleNumbers[Math.floor(num / 100)] + " hundred ";
                num = num - Math.floor(num / 100) * 100;
                console.log(num);
            } else if (num / 10 >= 2) {
                res += dozensNumbers[num - (num % 10)] + " ";
                num = num % 10;
                console.log(num);
            } else if (num / 10 >= 1 && num / 10 < 2) {
                res += belowTwentyNumbers[num] + " ";
                num = 0;
            } else {
                res += singleNumbers[Math.floor(num)];
                num = 0;
            }
        }
    }
    console.log(res);
    return res.trim();
};
