module.exports = function toReadable(number) {
    const singles = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const tensOne = [
        "",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tensTwo = [
        "",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    const len = number.toString().split("").length;
    const firstN = Number(number.toString().split("")[0]);
    const seconN = Number(number.toString().split("")[1]);
    const thirdN = Number(number.toString().split("")[2]);
    if (len == 1) return singles[number];
    if (len == 2)
        return seconN == 0
            ? tensTwo[firstN]
            : firstN === 1
            ? tensOne[seconN]
            : `${tensTwo[firstN]} ${singles[seconN]}`;

    if (len === 3)
        return singles[thirdN] === "zero" && singles[seconN] === "zero"
            ? `${singles[firstN]} hundred`
            : singles[thirdN] === "zero"
            ? `${singles[firstN]} hundred ${tensTwo[seconN]}`
            : singles[seconN] === "zero"
            ? `${singles[firstN]} hundred ${singles[thirdN]}`
            : seconN === 1
            ? `${singles[firstN]} hundred ${tensOne[thirdN]}`
            : `${singles[firstN]} hundred ${tensTwo[seconN]} ${singles[thirdN]}`;
};
