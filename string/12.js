function truncateString(str, num){
    return str.slice(0, num) + '...';
}

console.log(
    truncateString('Once upon a time, there was a dog who walked the streets looking for food at all hours of the day and night', 8)
)