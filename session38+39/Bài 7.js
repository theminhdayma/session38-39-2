function generatePassword() {
    var lengthInput = document.getElementById("length");
    var uppercaseInput = document.getElementById("uppercase");
    var lowercaseInput = document.getElementById("lowercase");
    var inclNumbersInput = document.getElementById("inclNumbers");
    var inclSymbolsInput = document.getElementById("inclSymbols");
    var generatedPasswordInput = document.getElementById("generatedPassword");

    var passwordLength = parseInt(lengthInput.value) || 8;
    var includeUppercase = uppercaseInput.checked;
    var includeLowercase = lowercaseInput.checked;
    var includeNumbers = inclNumbersInput.checked;
    var includeSymbols = inclSymbolsInput.checked;

    var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    var numbers = "0123456789";
    var symbols = "!@#$%^&*()_-+=<>?";

    var characters = "";
    var generatedPassword = "";

    if (includeUppercase) {
        characters += uppercaseLetters;
    }

    if (includeLowercase) {
        characters += lowercaseLetters;
    }

    if (includeNumbers) {
        characters += numbers;
    }

    if (includeSymbols) {
        characters += symbols;
    }

    for (var i = 0; i < passwordLength; i++) {
        var randomIndex = Math.floor(Math.random() * characters.length);
        generatedPassword += characters.charAt(randomIndex);
    }

    generatedPasswordInput.value = generatedPassword;
}

function copyToClipboard() {
    var generatedPasswordInput = document.getElementById("generatedPassword");
    generatedPasswordInput.select();
    document.execCommand("copy");
}

var generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click", generatePassword);

var clipboardBtn = document.getElementById("clipboardBtn");
clipboardBtn.addEventListener("click", copyToClipboard);