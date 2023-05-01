/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header')
        // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') :
        header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll(".service__modal");
const modalBtns = document.querySelectorAll(".service__button");
const modalClose = document.querySelectorAll(".service__modal-close");


let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}


modalBtns.forEach((mb, i) => {
    mb.addEventListener('click', () => {
        modal(i)
    })
})


modalClose.forEach((mc) => {
    mc.addEventListener("click", () => {
        modalViews.forEach((mv) => {
            mv.classList.remove("active-modal")
        })
    })
})


/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/* Link active work */
const linkWork = document.querySelectorAll('.work__item')

function activeWork() {
    linkWork.forEach(l => l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l => l.addEventListener('click', activeWork))


/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestemonal = new Swiper(".testemonal__container", {
    // slidesPerView: 3,
    spaceBetween: 24,
    loop: true,
    grabCursor: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 48,
        },
    },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)






/*=============== LIGHT DARK THEME ===============*/
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
    themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
        // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/


const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.home__data`)
sr.reveal(`.home__handle`, { delay: 700 })
sr.reveal(`.home__social, .home__scroll`, { delay: 900, origin: 'bottom' })
sr.reveal(`.section__title, .section__subtitle, .anmat__bottom`, { delay: 500, origin: 'bottom' })
sr.reveal(`.about__img, .sc__1`, { delay: 400, origin: 'left' })
sr.reveal(`.about__data, .sc__2`, { delay: 400, origin: 'right' })



/*=============== ADS ===============*/

let ads = document.querySelector('.ads');
let pad__dm = document.querySelector('.pad__dm');

function closeAds(a) {
    if (a == 1) {
        ads.style.width = '0'
        ads.style.opacity = '0'
        ads.style.owerflow = 'hidden'
    } else {
        pad__dm.style.width = '0'
        pad__dm.style.opacity = '0'
        pad__dm.style.owerflow = 'hidden'
    }

}

// setTimeout(() => {
//     console.log('helo world')
// }, 1000)
let i = 0;
const interval = setInterval(() => {
    i++
    console.log(i)
    if (i === 5) {
        clearInterval(interval)
        console.log('tamom')
        pad__dm.style.display = 'flex'

    }
}, 1000)

setTimeout(() => {
    clearInterval(interval)
    pad__dm.style.display = 'none'

}, 10000)



let b = 0;
const interval_2 = setInterval(() => {
    b++
    console.log(b)
    if (b === 2) {
        clearInterval(interval_2)
        console.log('tamom')
        ads.style.display = 'flex'

    }
}, 9000)

setTimeout(() => {
    clearInterval(interval_2)
    ads.style.display = 'none'

}, 25500)









// Send Messege JS
//
//

const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactProject = document.getElementById('contact-project');

const sendEmail = (e) => {
    e.preventDefault()
    if (contactName.value === '' || contactEmail.value === '' || contactProject.value === '') {
        alert('Malumot kiriting!')
    } {
        // serviceID - templateID - #form - publicKey
        emailjs.sendForm('service_ihrehvp', 'template_3pm15pe', '#contact-form', 'Y7JLOCD5HrUS0gsvn')
            .then(() => {
                alert('Malumot Yuborildi!')
            }, (error) => {
                alert('OOPS! SOMETHING HAS FAILED...', error)
            })

        contactName.value = ''
        contactEmail.value = ''
        contactProject.value = ''
    }
}
contactForm.addEventListener('submit', sendEmail)

let load__container = document.querySelector('.load__container')

function load__fn() {
    load__container.style.display = 'flex'
    setTimeout(() => {
        load__container.style.transform = 'scale(0)'
    }, 1500)
}