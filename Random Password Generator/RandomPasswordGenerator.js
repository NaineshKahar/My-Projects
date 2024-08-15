const passwordBox = document.getElementById('password');

// Define character sets for password generation
const upperCase = "ABCDEFGHIJKLMNOPQRSTUWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "~!@#$%^&*()_+-=[]{}<,.>\/?"; 

// Combine all character sets for random selection
const allChars = upperCase + lowerCase + numbers + symbols;

function createPassword() {
    const length = document.getElementById('length').value;
    let password = "";

	// Ensure at least one character from each character set
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while(password.length < length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
	
    passwordBox.value = password;
    
	// Hide the popup element
    document.getElementById('popupId').style.visibility = "hidden";
}

function copyPassword() {
	// Copy the password to the clipboard
    // document.execCommand("copy");
    navigator.clipboard.writeText(passwordBox.value);
    
	// Show the popup indicating successful copy
    const popup = document.getElementById('popupId');
    popup.classList.toggle('show');
    document.getElementById('popupId').style.visibility = "visible";
}