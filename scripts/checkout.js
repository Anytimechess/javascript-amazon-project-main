import { cartList,removeItemsFromCart,getCartQuantity} from "./cart.js";
import { products } from "../data/products.js";
const orderSummaryElement=document.querySelector('.order-summary');


displayCheckoutPage();
function displayCheckoutPage(){  
  
  let htmlAcc=``; 
cartList.forEach((checkoutProducts)=>{
  
  let product=checkoutProducts;
  // console.log(product)
  // console.log(checkoutProducts);
   products.forEach((itemsList)=>{
    if(itemsList.id===checkoutProducts.productId)
    {
   htmlAcc+= `<div class="cart-item-container
   dataItemContainer-${itemsList.id}
   "
  > 
      <div class="delivery-date">
        Delivery date: Wednesday, June 15
      </div>

      <div class="cart-item-details-grid">
        <img class="product-image"
          src=${itemsList.image}>

        <div class="cart-item-details">
          <div class="product-name">
          ${itemsList.name}
          </div>
          <div class="product-price">
            ${(itemsList.priceCents/100).toFixed(2)}
          </div>
          <div class="product-quantity">
            <span>
              Quantity: <span class="quantity-label">${product.quantity}</span>
            </span>
            <span class="update-quantity-link link-primary">
              Update
            </span>
            <span class="delete-quantity-link link-primary delete-btn-js" data-delete-productId=${itemsList.id} >
              Delete
            </span>
          </div>
        </div>

        <div class="delivery-options">
          <div class="delivery-options-title">
            Choose a delivery option:
          </div>

          <div class="delivery-option">
            <input type="radio" class="delivery-option-input"
              name="delivery-option-2">
            <div>
              <div class="delivery-option-date">
                Tuesday, June 21
              </div>
              <div class="delivery-option-price">
                FREE Shipping
              </div>
            </div>
          </div>
          <div class="delivery-option">
            <input type="radio" checked class="delivery-option-input"
              name="delivery-option-2">
            <div>
              <div class="delivery-option-date">
                Wednesday, June 15
              </div>
              <div class="delivery-option-price">
                $4.99 - Shipping
              </div>
            </div>
          </div>
          <div class="delivery-option">
            <input type="radio" class="delivery-option-input"
              name="delivery-option-2">
            <div>
              <div class="delivery-option-date">
                Monday, June 13
              </div>
              <div class="delivery-option-price">
                $9.99 - Shipping
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> `
    }
   })
})
orderSummaryElement.innerHTML=htmlAcc;
}

// checkoutItems 
const checkOutItemsCount =document.querySelector('.checkout-items-count-js');
checkOutItemsCount.innerHTML=`${getCartQuantity()} items`;

// delete item feature
let deleteBtnElemenst=document.querySelectorAll('.delete-btn-js');
deleteBtnElemenst.forEach((btn)=>{
  btn.addEventListener('click',()=>{
   let {deleteProductid}=btn.dataset;
   console.log(deleteProductid);
   removeItemsFromCart(deleteProductid);
   let deletedItemElement=document.querySelector(`.dataItemContainer-${deleteProductid}`);
   deletedItemElement.remove();
  //  console.log(cartList);
  })
});

