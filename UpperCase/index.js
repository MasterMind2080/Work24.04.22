// task. Capitalize first character in string
 
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
 
console.log(capitalizeFirstLetter("hello")); // Hello
console.log(capitalizeFirstLetter("qwerty")); // Qwerty
