import { cartList,removeItemsFromCart,getCartQuantity,updateCartNewQuantity} from "./cart.js";
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
   dataItemContainer-${itemsList.id}"
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
              Quantity: <span class="quantity-label quantity-label-${itemsList.id}">${product.quantity}</span>
            </span>
            <span class="update-quantity-link link-primary update-btn-js" data-update-id=${itemsList.id}>
              Update
            </span>
            <input type="text" class="
            updatequantity
            quantity-input-${itemsList.id} ">
            <span class="save-quantity-link link-primary" data-save-Btn="${itemsList.id}">Save</span>
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
              name="delivery-option-${itemsList.id}">
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
              name="delivery-option-${itemsList.id}">
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
              name="delivery-option-${itemsList.id}">
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
function count(){
  const checkOutItemsCount =document.querySelector('.checkout-items-count-js');
  checkOutItemsCount.innerHTML=`${getCartQuantity()} items`;  
}
count();
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
  count();
  })
});

//making update button interactive
const updateBtnElements=document.querySelectorAll('.update-btn-js');

updateBtnElements.forEach((updateBtn)=>{
  updateBtn.addEventListener('click',()=>{
    const updateProductId=updateBtn.dataset.updateId;
    const containerElement=document.querySelector(`.dataItemContainer-${updateProductId}`);
    // console.log(containerElement)

    containerElement.classList.add('is-editing');
  })
})

const saveBtnElement=document.querySelectorAll('.save-quantity-link');
// console.log(saveBtnElement);
saveBtnElement.forEach((saveBtn)=>{
  saveBtn.addEventListener('click',()=>{
   const productId=saveBtn.dataset.saveBtn;
  //  console.log(productId);
  let containerElement=document.querySelector(`.dataItemContainer-${productId}`);
 
  let inputElement=document.querySelector(`.quantity-input-${productId}`);
  let updateQuantity=Number(inputElement.value);
  const quantityLabelElement=document.querySelector(`.quantity-label-${productId}`);
  quantityLabelElement.innerHTML=updateQuantity; 

  updateCartNewQuantity(productId,updateQuantity);
  count();
   containerElement.classList.remove('is-editing');
  })
})