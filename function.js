// Function to encrypt file
function encryptFile() {
    var fileInput = document.getElementById('fname');
    var file = fileInput.files[0];
    var password = prompt("Enter password for encryption:");
    
    var reader = new FileReader();

    reader.onload = function(event) {
        var fileContent = event.target.result;
        var encryptedContent = CryptoJS.AES.encrypt(fileContent, password).toString();
        document.getElementById('download');
    };

    reader.readAsText(file);
}

// Function to decrypt file
function decryptFile() {
    var fileInput = document.getElementById('defname');
    var file = fileInput.files[0];
    var password = prompt("Enter password for decryption:");
    
    var reader = new FileReader();

    reader.onload = function(event) {
        var fileContent = event.target.result;
        var decryptedContent = CryptoJS.AES.decrypt(fileContent, password).toString(CryptoJS.enc.Utf8);
        document.getElementById('download');
    };

    reader.readAsText(file);
}

//to download file
function downloadFile(content, filename) {
    var content = encryptedContent || decryptedContent;
    var filename = encryptedContent ? document.getElementById('fname').files[0].name + ".enc" : document.getElementById('defname').files[0].name.replace(".enc", "");
    var blob = new Blob([content], { type: "text/plain" });
    var url = window.URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
}

//buttons
document.querySelector('.inputen button').addEventListener('click', encryptFile);
document.querySelector('.inputde button').addEventListener('click', decryptFile);
document.getElementById('download').addEventListener('click', downloadContent);
