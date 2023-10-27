var eleInputLength = document.getElementById("input-length")
var elePasswordLengthTxt = document.getElementById("length")
var btnGenerate = document.getElementById("buttonGenerate")
var eleCheckboxNumbers = document.getElementById("checkbox-numbers")
var eleCheckboxLetters = document.getElementById("checkbox-letters")
var eleCheckboxSymbols = document.getElementById("checkbox-symbols")
const NUMBERS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const SYMBOLS = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];
var passwordTxt = document.getElementById("result")

btnGenerate.addEventListener('click', function () {
    var type;
    var pass = ""
    if (eleCheckboxNumbers.checked) {
        type = NUMBERS
    }
    if (eleCheckboxLetters.checked) {
        type = LETTERS
    }
    if (eleCheckboxSymbols.checked) {
        type = SYMBOLS
    }

    passwordTxt.innerHTML = generatePassword(type);
})

function generatePassword(characters) {
    var passwordGenerate = "";
    for (let index = 0; index < parseInt(eleInputLength.value); index++) {
        var randomItem = characters[Math.floor(Math.random() * characters.length)]
        passwordGenerate += randomItem
    }
    return passwordGenerate
}

eleInputLength.addEventListener('change', function () {
    elePasswordLengthTxt.innerHTML = parseInt(eleInputLength.value)
})

