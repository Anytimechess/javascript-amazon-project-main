import {getCartQuantity} from './cart.js'
export function checkoutHeader()
{
 let htmlAcc=` Checkout (<a class="return-to-home-link checkout-items-count-js"
            href="amazon.html">${getCartQuantity()} items</a>)`

  document.querySelector('.checkout-header-middle-section').innerHTML=htmlAcc;         
}