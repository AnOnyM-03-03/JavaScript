function toggleCard() {

    const wrapperCart = document.querySelector('.cart-wrapper');

    const cartEmpty = document.querySelector("[data-cart-empty]")

    const orderForm = document.querySelector("#order-form")


    if (wrapperCart.children.length > 0) {

        cartEmpty.classList.add('none')

        orderForm.classList.remove('none');

    } else {

        cartEmpty.classList.remove('none');

        orderForm.classList.add('none');

    }


}

function calcSumAndDelivery() {

    const cartItems = document.querySelectorAll('.cart-item');

    let totalPrice = 0;

    const totalPriceEl = document.querySelector('.total-price');


    cartItems.forEach(function (item) {

        const amount = item.querySelector('[data-counter]')

        const price = item.querySelector('.price__currency')

        const currentPrice = parseInt(amount.innerText) * parseInt(price.innerText);


        totalPrice += currentPrice;

    });

    totalPriceEl.innerText = totalPrice;


    const deliveryCost = document.querySelector('.delivery-cost ')

    const cartDelivery = document.querySelector('[data-cart-delivery]')


    if (totalPrice > 0) {

        cartDelivery.classList.remove('none')

    } else {

        cartDelivery.classList.add('none')

    }

    if (totalPrice >= 600) {
        deliveryCost.classList.add('.free');
        deliveryCost.innerText = "бeсплатно";

    } else {
        deliveryCost.classList.remove('.free');
        deliveryCost.innerText = "250 P";
    }




}