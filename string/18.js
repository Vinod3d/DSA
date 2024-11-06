function getLargestLexicographicalString(strings) {
    strings.sort((a, b) => b.localeCompare(a));
    return strings[0];
}

const strings = ["apple", "banana", "orange", "mango"];
const largestString = getLargestLexicographicalString(strings);
console.log("Largest Lexicographical String:", largestString);
