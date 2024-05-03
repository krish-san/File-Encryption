// Function to encrypt file using password
function encryptFile() {
    var fileInput = document.getElementById('fname');
    var file = fileInput.files[0];
    var password = prompt("Enter password for encryption:");
    
    var reader = new FileReader();

    reader.onload = function(event) {
        var fileContent = event.target.result;
        var encryptedContent = CryptoJS.AES.encrypt(fileContent, password).toString();
        downloadFile(encryptedContent, file.name + ".enc");
    };

    reader.readAsText(file);
}

// Function to decrypt file using password
function decryptFile() {
    var fileInput = document.getElementById('defname');
    var file = fileInput.files[0];
    var password = prompt("Enter password for decryption:");
    
    var reader = new FileReader();

    reader.onload = function(event) {
        var fileContent = event.target.result;
        var decryptedContent = CryptoJS.AES.decrypt(fileContent, password).toString(CryptoJS.enc.Utf8);
        downloadFile(decryptedContent, file.name.replace(".enc", ""));
    };

    reader.readAsText(file);
}

// Function to download file
function downloadFile(content, filename) {
    var blob = new Blob([content], { type: "text/plain" });
    var url = window.URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
}

// Event listeners for encryption and decryption buttons
document.querySelector('.inputen button').addEventListener('click', encryptFile);
document.querySelector('.inputde button').addEventListener('click', decryptFile);
