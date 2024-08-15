// Get references to DOM elements
let imgBox = document.getElementById('imgBox');
let qrImage = document.getElementById('qrImage');
let qrText = document.getElementById('qrText');

function generateQR() {
	// Check if the input field has any text entered
    if(qrText.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + qrText.value;
        imgBox.classList.add("show-img");
    }
    else {
		// If no text entered, add an "error" class to the input field for visual feedback
        qrText.classList.add('error');
        setTimeout(() => {
            qrText.classList.remove('error');
        }, 1000);
    }
}