import {products} from '../data/products.js';
import{getCartQuantity,updateCart} from './cart.js';
const rootElement =document.querySelector('.products-grid');
console.log("hi");
let htmlCode='';
products.forEach((cartItems)=>{
// console.log(cartItems);
 htmlCode+=`
 <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src=${cartItems.image}>
          </div>

          <div class="product-name limit-text-to-2-lines">
          ${cartItems.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${cartItems.rating.stars*10}.png">
            <div class="product-rating-count link-primary">
             ${cartItems.rating.count}
            </div>
          </div>

          <div class="product-price">
           ${cartItems.priceCents.toFixed(2)/100}$
          </div>

          <div class="product-quantity-container">
            <select class="drop-down-list-js-${cartItems.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary add-to-cart-js "data-product-id="${cartItems.id}">
            Add to Cart
          </button>
        </div>

 `

});
rootElement.innerHTML=htmlCode;

const cart=document.querySelector('.cart-quantity');
let addToCartButtonElement=document.querySelectorAll('.add-to-cart-js');
let cartItems=getCartQuantity();
addToCartButtonElement.forEach((btns)=>{
    btns.addEventListener("click",()=>{
        const{productId}=btns.dataset;
        // console.log(typeof productId)
        let dropDownList= document.querySelector(`.drop-down-list-js-${productId}`);
        let quantity=Number(dropDownList.value);
        cartItems+=quantity

        updateCart(productId,quantity);
        cart.innerHTML=cartItems;
})
})


