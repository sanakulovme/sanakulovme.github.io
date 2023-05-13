let rgbRow = document.getElementById('rgbColor'),
    hslRow = document.getElementById('hslColor')




// function copyColor(p) {
//     if (p == 'rgb') {
//         // rgbRow.select();
//         rgbRow.setSelectionRange(0, 99999); // For mobile devices

//         navigator.clipboard.writeText(rgbRow.value);

//         alert("Copied the text: " + rgbRow.value);
//     }
// }

function copyColor() {
    // Get the text field
    var copyText = document.getElementById("rgbColor");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // Alert the copied text
    alert("Copied the text: " + copyText.value);
}