let oneI = document.getElementById('one'),
    twoI = document.getElementById('two'),
    sriI = document.getElementById('sri'),
    foI = document.getElementById('fo');

// let n_one = document.getElementById('n_one');

oneI.focus()

function clearPass() {
    oneI.classList.remove('error__input', 'ok__input')
    twoI.classList.remove('error__input', 'ok__input')
    sriI.classList.remove('error__input', 'ok__input')
    foI.classList.remove('error__input', 'ok__input')

    oneI.value = ''
    twoI.value = ''
    sriI.value = ''
    foI.value = ''
    oneI.focus()
}


function passFn(argument) {
    if (argument == 'one') {
        helpFn()
    } else if (argument == 'two') {
        helpFn()

    } else if (argument == "sri") {
        helpFn()

    } else if (argument == 'fo') {
        helpFn()
    }
}

function okFn() {
    oneI.classList.add('ok__input')
    twoI.classList.add('ok__input')
    sriI.classList.add('ok__input')
    foI.classList.add('ok__input')
}

function errorFn() {
    oneI.classList.add('error__input')
    twoI.classList.add('error__input')
    sriI.classList.add('error__input')
    foI.classList.add('error__input')
}

function helpFn() {
    if (!oneI.value == '' && !twoI.value == '' && !sriI.value == '' && !foI.value == '') {
        console.log('end')
        if (oneI.value == 1 && twoI.value == 2 && sriI.value == 3 && foI.value == 4) {
            okFn()
            setTimeout(() => {
                clearPass()
            }, 1000)
        } else {
            errorFn()
            setTimeout(() => {
                clearPass()
            }, 1000)
        }
    } else {
        if (oneI.value == '') {
            oneI.focus()
        } else if (twoI.value == '') {
            twoI.focus()
        } else if (sriI.value == '') {
            sriI.focus()
        } else if (foI.value == '') {
            foI.focus()
        }
    }
}