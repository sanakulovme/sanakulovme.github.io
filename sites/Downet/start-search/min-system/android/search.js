"use strict"

const searchInput = document.querySelector(".search-input"),
    appsName = document.querySelectorAll(".app-box .app-box-name"),
    appsBox = document.querySelectorAll(".app-box")

searchInput.addEventListener('input', () => {
    let appIndex = []
    appsName.forEach((item, index) => {
        let reg = new RegExp(`${searchInput.value}`, 'i')
        appIndex.push(item.outerText.search(reg))

    })
    console.log(appIndex)
    appIndex.forEach((item, index) => {
        appsBox[index].style.display = "none"
        if(item !== -1){
            appsBox[index].style.display = "block"
        }else{

        }
    })
})