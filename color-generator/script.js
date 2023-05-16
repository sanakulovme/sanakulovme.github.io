let rgbBox = document.getElementById('rgb'),
    hslBox = document.getElementById('hls'),
    rgbSpan = document.getElementById('rgbSpan'),
    hlsSpan = document.getElementById('hlsSpan');

let red = document.getElementById('red'),
    green = document.getElementById('green'),
    blue = document.getElementById('blue'),
    alfa = document.getElementById('alfa');

let h_1 = document.getElementById('h_1'),
    h_2 = document.getElementById('h_2'),
    h_3 = document.getElementById('h_3'),
    h_alfa = document.getElementById('h_alfa');

let hexBox = document.getElementById('hex'),
    hexcolor = document.getElementById('hexInput'),
    hexSpan = document.getElementById('hexSpan');

function rgbFn() {
    rgbBox.style.background = 'rgba(' + red.value + ',' + green.value + ',' + blue.value + ',' + alfa.value + ')'
    rgbSpan.value = 'rgba(' + red.value + ',' + green.value + ',' + blue.value + ',' + alfa.value + ')'
}

function hlsFn() {
    hslBox.style.background = 'hsla(' + h_1.value + ',' + h_2.value + '%,' + h_3.value + '%,' + h_alfa.value + ')'
    hlsSpan.value = 'hsla(' + h_1.value + ',' + h_2.value + '%,' + h_3.value + '%,' + h_alfa.value + ')'
}

function colorFn() {
    hexBox.style.background = hexcolor.value
    hexSpan.value = hexcolor.value
}

function copyT(i) {
    if (i == 'rgb') {
        rgbSpan.select();
        rgbSpan.setSelectionRange(0, 99999); // For mobile devices

        // Copy the text inside the text field
        navigator.clipboard.writeText(rgbSpan.value);

        // Alert the copied text
        alert("RGBA - Rang kodi nusxalandi: " + rgbSpan.value);
    } else if (i == 'hsl') {
        hlsSpan.select();
        hlsSpan.setSelectionRange(0, 99999); // For mobile devices

        // Copy the text inside the text field
        navigator.clipboard.writeText(hlsSpan.value);

        // Alert the copied text
        alert("HSLA - Rang kodi nusxalandi: " + hlsSpan.value);
    } else if (i == 'hex') {
        hexSpan.select();
        hexSpan.setSelectionRange(0, 99999); // For mobile devices

        // Copy the text inside the text field
        navigator.clipboard.writeText(hexSpan.value);

        // Alert the copied text
        alert("HEX - Rang kodi nusxalandi: " + hexSpan.value);
    }

}