// For faq section



let faq1 = document.getElementById('faq1'),
    faq2 = document.getElementById('faq2'),
    faq3 = document.getElementById('faq3'),
    faq4 = document.getElementById('faq4'),
    faq5 = document.getElementById('faq5');

let fi1 = document.getElementById('fi1'),
    fi2 = document.getElementById('fi2'),
    fi3 = document.getElementById('fi3'),
    fi4 = document.getElementById('fi4'),
    fi5 = document.getElementById('fi5');

function faqs__fn(argument) {
    if (argument == 'f1') {
        if (faq1.className == 'faq__row') {
            fi1.classList.add('faq__arrow-rotate');
            faq1.className = 'faq__row-open'
            cloesFaq('f1')
        } else {
            fi1.classList.remove('faq__arrow-rotate');
            faq1.className = 'faq__row'
        }
    } else if (argument == 'f2') {
        if (faq2.className == 'faq__row') {
            fi2.classList.add('faq__arrow-rotate');
            faq2.className = 'faq__row-open'
            cloesFaq('f2')
            fi2.style.transition = 'all 0.3s';
        } else {
            fi2.classList.remove('faq__arrow-rotate');
            faq2.className = 'faq__row'
        }
    } else if (argument == 'f3') {
        if (faq3.className == 'faq__row') {
            fi3.classList.add('faq__arrow-rotate');
            faq3.className = 'faq__row-open'
            cloesFaq('f3')
            fi3.style.transition = 'all 0.3s';
        } else {
            fi3.classList.remove('faq__arrow-rotate');
            faq3.className = 'faq__row'
        }
    } else if (argument == 'f4') {
        if (faq4.className == 'faq__row') {
            fi4.classList.add('faq__arrow-rotate');
            faq4.className = 'faq__row-open'
            cloesFaq('f4')
            fi4.style.transition = 'all 0.3s';
        } else {
            fi4.classList.remove('faq__arrow-rotate');
            faq4.className = 'faq__row'
        }
    } else if (argument == 'f5') {
        if (faq5.className == 'faq__row') {
            fi5.classList.add('faq__arrow-rotate');
            faq5.className = 'faq__row-open'
            cloesFaq('f5')
            fi5.style.transition = 'all 0.3s';
        } else {
            fi5.classList.remove('faq__arrow-rotate');
            faq5.className = 'faq__row'
        }
    }
}


function cloesFaq(argument) {
    if (argument == 'f1') {
        faq2.className = 'faq__row';
        faq3.className = 'faq__row';
        faq4.className = 'faq__row';
        faq5.className = 'faq__row';

        fi2.classList.remove('faq__arrow-rotate');
        fi3.classList.remove('faq__arrow-rotate');
        fi4.classList.remove('faq__arrow-rotate');
        fi5.classList.remove('faq__arrow-rotate');
    } else if (argument == 'f2') {
        faq1.className = 'faq__row';
        faq3.className = 'faq__row';
        faq4.className = 'faq__row';
        faq5.className = 'faq__row';

        fi1.classList.remove('faq__arrow-rotate');
        fi3.classList.remove('faq__arrow-rotate');
        fi4.classList.remove('faq__arrow-rotate');
        fi5.classList.remove('faq__arrow-rotate');
    } else if (argument == 'f3') {
        faq2.className = 'faq__row';
        faq1.className = 'faq__row';
        faq4.className = 'faq__row';
        faq5.className = 'faq__row';

        fi2.classList.remove('faq__arrow-rotate');
        fi1.classList.remove('faq__arrow-rotate');
        fi4.classList.remove('faq__arrow-rotate');
        fi5.classList.remove('faq__arrow-rotate');
    } else if (argument == 'f4') {
        faq1.className = 'faq__row';
        faq2.className = 'faq__row';
        faq3.className = 'faq__row';
        faq5.className = 'faq__row';

        fi1.classList.remove('faq__arrow-rotate');
        fi2.classList.remove('faq__arrow-rotate');
        fi3.classList.remove('faq__arrow-rotate');
        fi5.classList.remove('faq__arrow-rotate');
    } else if (argument == 'f5') {
        faq1.className = 'faq__row';
        faq3.className = 'faq__row';
        faq4.className = 'faq__row';
        faq2.className = 'faq__row';

        fi1.classList.remove('faq__arrow-rotate');
        fi3.classList.remove('faq__arrow-rotate');
        fi4.classList.remove('faq__arrow-rotate');
        fi2.classList.remove('faq__arrow-rotate');
    }
}