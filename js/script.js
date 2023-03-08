// Server path
let path = "http://127.0.0.1:5500/";

$(document).ready(function() {
    $('.slider').slick({
        speed: 700,
        slidesToShow: 1,
        easing: 'linear',
        swipe: false,
        infinite: true
    });
});

document.addEventListener('click', async function(event) {
    let arg = event.target;
    let id = arg.dataset.id; 

    if (arg.classList.contains('mode-item')) {
        $('.header, .container, .footer, .footer-dev, .theme-block').toggleClass('night-mode');
        if (arg.src == `${path}img/theme/01.svg`) {
            arg.src = `${path}img/theme/02.svg`;
        } else {
            arg.src = `${path}img/theme/01.svg`;
        }
    }

    if (arg.classList.contains('theme-item')) {
        //await first_animate(arg);
        await second_animate(arg);    
    }

    if (arg.classList.contains(`theme-block-color__${id}`)) {
        let titles = $('.header__title, .container__button, .container__title, .slider-item__add-button, .footer__line');

        titles.removeClass(`red-theme`);
        titles.removeClass(`blue-theme`);
        titles.removeClass(`green-theme`);
        titles.removeClass(`orange-theme`);
        titles.removeClass(`purple-theme`);
        
        titles.addClass(`${id}-theme`);           
    }
});

// First Animate
async function first_animate(arg) {
    if (arg.classList.contains('active')) {
        // Smooth disappearing of the theme-block upwards
        $('.theme-block').animate ({
            'top': '-250px'
        }, 500)
    } else {
        // Smooth appearing of the theme-block
        $('.theme-block').animate ({
            'top': '30px'
        }, 500)
    }
    $('.theme-item').toggleClass('active');    
};

// Second Animate
async function second_animate(arg) {

    if (arg.classList.contains('active')) {
        // Smooth disappearing of the theme-block upwards
        $('.theme-block').animate ({
            'top': '-250px'
        }, 500)
        // Smooth moving of the settings-block upwards
        $('.header__settings').animate ({
            'top': '0'
        }, 500)
    } else {
        // Smooth appearing of the theme-block
        $('.theme-block').animate ({
            'top': '-210px',
        }, 500)   
        // Smooth moving of the settings-block down
        $('.header__settings').animate ({
            'top': '200px'
        }, 500) 
    }

    $('.theme-item').toggleClass('active');      
}