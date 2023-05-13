// let fz = document.getElementById('fz'),
//     range_disp = document.getElementById('range_disp').value;
// let random__num
// oninput="output_disp.value = range_disp.value + '%' , danger_p.value =  range_disp.value - 2 + '%', warning_p.value =  range_disp.value - 1 + '%', sc.value = range_disp.value + '%', wa.value =  parseInt(range_disp.value) + 1 + '%', dn.value =  parseInt(range_disp.value) + 2 + '%'"
var step = 0;
const stepElem = document.getElementById('step');

function startGame() {
    document.getElementById("range_disp").removeAttribute("disabled");
    document.getElementById("tryBtn").removeAttribute("disabled");
    var sg = document.getElementById("sg").setAttribute("disabled", "");
    // random__num = 60
    random__num = Math.floor(Math.random() * 100);

    fz.style.height = random__num + '%'

    step++
    stepElem.innerHTML = step
}
let range_disp = document.getElementById('range_disp');

let danger_p = document.getElementById('danger_p'),
    warning_p = document.getElementById('warning_p'),
    sc = document.getElementById('sc'),
    wa = document.getElementById('wa'),
    dn = document.getElementById('dn'),
    output_disp = document.getElementById('output_disp');

let h2 = document.getElementById('h2'),
    body = document.getElementById('body');

let result = document.getElementById('result'),
    resultNum = 0;

function range__fn() {
    // console.log(range_disp.value)
    output_disp.value = range_disp.value

    danger_p.value = range_disp.value - 2
    warning_p.value = range_disp.value - 1
    sc.value = range_disp.value + '%'
    wa.value = parseInt(range_disp.value) + 1
    dn.value = parseInt(range_disp.value) + 2

}

function tryFn() {
    document.getElementById("sg").removeAttribute("disabled");
    document.getElementById("tryBtn").setAttribute("disabled", "");
    document.getElementById("range_disp").setAttribute("disabled", "");

    // console.log(range_disp.value)
    // console.log(random__num)
    h2.innerHTML = random__num + '%'


    // ===

    let dn2 = parseInt(dn.value),
        dan2 = parseInt(danger_p.value),
        war2 = parseInt(warning_p.value),
        sc2 = parseInt(sc.value),
        wa2 = parseInt(wa.value)


    // console.log(dan2, war2, sc2, wa2, dn2)
    // console.log(typeof (dn2))



    if (random__num == dn2 || random__num == dan2) {
        dn.style.transform = 'scale(1.5)'
        danger_p.style.transform = 'scale(1.5)'
        resultNum += 3
        result.innerHTML = resultNum

        setTimeout(() => {
            dn.style.transform = 'scale(1.0)'
            danger_p.style.transform = 'scale(1.0)'
        }, 3000)
    } else if (random__num == war2 || random__num == wa2) {
        wa.style.transform = 'scale(1.5)'
        warning_p.style.transform = 'scale(1.5)'
        resultNum += 4
        result.innerHTML = resultNum
        setTimeout(() => {
            wa.style.transform = 'scale(1.0)'
            warning_p.style.transform = 'scale(1.0)'
        }, 3000)
    } else if (random__num == sc2) {
        sc.style.transform = 'scale(1.5)'
        resultNum += 5
        result.innerHTML = resultNum
        setTimeout(() => {
            sc.style.transform = 'scale(1.0)'
        }, 3000)
    } else {

    }
    // console.log(dan2)
    // console.log(typeof(dn.value)) //parseInt(typeof(warning_p.value))
}