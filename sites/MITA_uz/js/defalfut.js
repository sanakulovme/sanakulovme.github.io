const boxes = document.querySelector(".boxes");
const wrapper = document.querySelector(".wrapper");
const box = document.querySelectorAll(".short_col");
const width = document.querySelector(".container").offsetWidth;
const parent = document.querySelector(".dots")
var offset = 1,
    defaultWidth = ((width / 2) - (box[0].offsetWidth / 2)),
    boxesWidth = box[0].offsetWidth + 30;
box.forEach(item => {
    const div = document.createElement("div");
    div.className = "dot";
    parent.append(div);
})

function refresh() {
    dot[offset].classList.add("active");
    box[offset].classList.add("active_box");
    boxes.style.paddingLeft = defaultWidth + 'px';
    boxes.style.transform = `translateX(-${boxesWidth * offset}px)`;
}


const dot = document.querySelectorAll(".dot");
// console.log(dot[0])
refresh()

dot.forEach((item, index) => {
    item.addEventListener('click', () => {
        dot.forEach(d => d.classList.remove("active"));
        box.forEach(b => b.classList.remove("active_box"))
        offset = index;

        refresh()
    })
})



function open_nav(argument) {
    var nav = document.getElementById('nav');
    var res = document.getElementById('res');
    var navicon = document.getElementById('navicon');
    if (res.className == "fornav") {
        res.className = "nonav"
        nav.style.height = "0px"
        // nav.style.overflow = "hidden"
        navicon.style.transform = "rotate(0)"
        navicon.className = "fa fa-navicon open_nav"
    } else {
        // nav.style.overflow = "auto"
        res.className = "fornav"
        nav.style.height = "314px"
        navicon.className = "fa fa-close open_nav"
        navicon.style.transform = "rotate(180deg)"
    }
}