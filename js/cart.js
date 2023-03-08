let cart = {
    'burger': 0,
    'pizza': 0,
    'hot_dog': 0,
    'fries': 0,
    'ice_cream': 0,
    'croissant': 0,
    'donut': 0,
    'popcorn': 0,
    'sushi': 0,
    'coke': 0,
    'juice': 0,
    'milkshake': 0,
    'tea': 0,
    'coffee': 0
}

document.addEventListener('click', function(event) {
    let arg = event.target;
    let id = arg.dataset.id;

    if ((arg.classList.contains('slider-item__plus-button')) || (arg.classList.contains('slider-item__add-button'))) {plusFunction(id);} 

    if (arg.classList.contains('slider-item__minus-button')) {minusFunction(id);}

    checkOrder(id);
});

function plusFunction(id) {
    cart[id]++;

    $(`.${id}-counter, .${id}-plus, .${id}-minus, .container__button`).removeClass('hide');
    $(`.${id}-button`).addClass('hide');
    $(`.${id}-plus`).addClass('animateToRight');
    $(`.${id}-minus`).addClass('animateToLeft');
    $(`.${id}-counter`).html(cart[id]);
}

function minusFunction(id) {
    cart[id]--;

    if (cart[id] <= 0) {    

        $(`.${id}-button`).removeClass('hide');
        $(`.${id}-counter, .${id}-plus, .${id}-minus`).addClass('hide');
        $(`.${id}-plus`).removeClass('animateToRight');
        $(`.${id}-minus`).removeClass('animateToLeft');

        cart[id] = 0;
    }

    $(`.${id}-counter`).html(cart[id]);
}

function checkOrder(id) {
    let check = 0;

    for (var id in cart) {
        if (cart[id] > 0) {check += 1;}
    }

    if (check == 0) {
        $(`.container__button`).addClass('hide');
    }
}