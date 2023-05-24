let mbtn = document.getElementById('mybtn'),
    p_input = document.getElementById('password'),
    body = document.getElementById('body');

// console.log(p_input.value)

let step = 0;

function passFn() {
    if (p_input.value == '1234') {
        console.log("ok");
        console.log(p_input)
        body.className = 'fine'
    } else {
        console.log('error');
        console.log(p_input)
        body.className = 'error'
    }
}

function hover() {
    if (body.className == 'error') {
        if (step == 0) {
            mbtn.style.right = "70px"
            step = 1
        } else if (step == 1) {
            mbtn.style.right = "-70px"
            step = -1
        } else if (step == -1) {
            mbtn.style.right = "0"
            step = 0
        }
    }
}