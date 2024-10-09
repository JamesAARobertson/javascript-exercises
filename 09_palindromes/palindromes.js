const palindromes = function (str) {
    // regular expression to remove punctuation, spaces & convert to lowercase
    let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "")

    let reverseStr = cleanStr.split("").reverse().join("");
    if (cleanStr === reverseStr) {
        return true
    }
    return false

};

// Do not edit below this line
module.exports = palindromes;
