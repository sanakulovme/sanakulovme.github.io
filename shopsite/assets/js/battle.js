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





 //  Battle Pages


 battle_1 = document.getElementById('battle_1'),
     battle_2 = document.getElementById('battle_2'),
     battle_3 = document.getElementById('battle_3'),
     battle_4 = document.getElementById('battle_4'),
     battle_5 = document.getElementById('battle_5'),
     battle_6 = document.getElementById('battle_6');


 wi_1 = document.getElementById('wi-1'),
     wi_2 = document.getElementById('wi-2'),
     wi_3 = document.getElementById('wi-3'),
     wi_4 = document.getElementById('wi-4'),
     wi_5 = document.getElementById('wi-5'),
     wi_6 = document.getElementById('wi-6');


 function battle_pages(index) {
     if (index == 1) {
         battle_1.style.display = 'grid'
         wi_1.style.background = 'var(--first-color)'
         wi_1.style.color = 'var(--body-color)'

         battle_2.style.display = 'none'
         battle_3.style.display = 'none'
         battle_4.style.display = 'none'
         battle_5.style.display = 'none'
         battle_6.style.display = 'none'
     } else if (index == 2) {
         battle_2.style.display = 'grid'
         wi_2.style.background = 'var(--first-color)'
         wi_2.style.color = 'var(--body-color)'

         battle_1.style.display = 'none'
         battle_3.style.display = 'none'
         battle_4.style.display = 'none'
         battle_5.style.display = 'none'
         battle_6.style.display = 'none'
     } else if (index == 3) {
         battle_3.style.display = 'grid'
         wi_3.style.background = 'var(--first-color)'
         wi_3.style.color = 'var(--body-color)'

         battle_1.style.display = 'none'
         battle_2.style.display = 'none'
         battle_4.style.display = 'none'
         battle_5.style.display = 'none'
         battle_6.style.display = 'none'
     }
 }