// Server path
let path = "http://127.0.0.1:5500/";

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
        await animate(arg);    
    }

    if (arg.classList.contains(`theme-block-color__${id}`)) {
        let titles = $('.header__title, .container__button, .container__title, .slider-item__add-button, .footer__line, .slider-item__counter, .slider-item__plus-button, .slider-item__minus-button');

        titles.removeClass(`red-theme`);
        titles.removeClass(`blue-theme`);
        titles.removeClass(`green-theme`);
        titles.removeClass(`orange-theme`);
        titles.removeClass(`purple-theme`);
        
        titles.addClass(`${id}-theme`);           
    }
});

// Second Animate
async function animate(arg) {

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