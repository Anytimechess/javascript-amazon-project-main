import { cartList,removeItemsFromCart,getCartQuantity,updateCartNewQuantity,updateCartOption} from "../cart.js";
import { products } from "../../data/products.js";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { deliveryOptions } from "../updateDeliveryOptions.js";
import { orderSummary } from "./ordersummary.js";
import { checkoutHeader } from "../checkoutHeader.js";
const orderSummaryElement=document.querySelector('.order-summary');

displayCheckoutPage();
export function displayCheckoutPage(){  
  
  let htmlAcc=``; 
cartList.forEach((checkoutProducts)=>{
  
 
  let product=checkoutProducts;
  // console.log(product)
  // console.log(checkoutProducts);
   products.forEach((itemsList)=>{
    if(itemsList.id===checkoutProducts.productId)
    {

      let foundDeliveryDays;
      deliveryOptions.forEach((options)=>{
       if(options.id===checkoutProducts.deliveryId)
        {
          foundDeliveryDays=options.days;
        }
      })  
      let date=dayjs();
      let newDate=date.add(foundDeliveryDays,'days')
      // console.log(foundDeliveryDateId)
   htmlAcc+= `<div class="cart-item-container
   dataItemContainer-${itemsList.id}"
  > 
      <div class="delivery-date delivery-date-js-${itemsList.id}">
        Delivery date:${newDate.format("dddd ,MMMM D")}
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

          ${disOptions(itemsList.id,checkoutProducts.deliveryId)}
           
          
        </div>
      </div>
    </div> `
    }
   })
})
orderSummaryElement.innerHTML=htmlAcc;

// checkoutItems 
// function count(){
//   const checkOutItemsCount =document.querySelector('.checkout-items-count-js');
//   checkOutItemsCount.innerHTML=`${getCartQuantity()} items`;  
// }
// count();
// delete item feature
let deleteBtnElemenst=document.querySelectorAll('.delete-btn-js');
deleteBtnElemenst.forEach((btn)=>{
  btn.addEventListener('click',()=>{
   let {deleteProductid}=btn.dataset;
   console.log(deleteProductid);
   removeItemsFromCart(deleteProductid);
  //  let deletedItemElement=document.querySelector(`.dataItemContainer-${deleteProductid}`);
  // //  deleteBtnElemenst.
  //  deletedItemElement.remove();
  //  console.log(cartList);
  displayCheckoutPage();
  orderSummary();
  // count();
  checkoutHeader();
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
  // const quantityLabelElement=document.querySelector(`.quantity-label-${productId}`);
  // quantityLabelElement.innerHTML=updateQuantity; 

  updateCartNewQuantity(productId,updateQuantity);
  // count();
  // checkoutHeader();
  // orderSummary();
   containerElement.classList.remove('is-editing');
   displayCheckoutPage();
   orderSummary();
   checkoutHeader();
  })
})


function disOptions(itemsList,deliveryId){
  let date=dayjs();
  let htmlAccOptions='';
  deliveryOptions.forEach((options)=>{
    let newDate=date.add(options.days,'days')
          htmlAccOptions+=
          ` <div class="delivery-option" >
              <input ${options.id===deliveryId?'checked':''} type="radio" class="delivery-option-input delivery-option-input-js"
                name="delivery-option-${itemsList}" data-option-id="${options.id}" data-product-id="${itemsList}">
              <div>
                <div class="delivery-option-date">
                  ${newDate.format("dddd ,MMMM D")}
                </div>
                <div class="delivery-option-price">
                  ${options.days==='7'?'Free':options.priceCents}-Shipping
                </div>
              </div>
            </div>`
  })
  
 return (htmlAccOptions)
}
let radioElements=document.querySelectorAll('.delivery-option-input-js');
radioElements.forEach((options)=>{
  options.addEventListener('click',()=>{
     let {optionId,productId}=options.dataset;
    //  console.log(optionId);
    //  console.log(productId);
    updateCartOption(productId,optionId);
    displayCheckoutPage();
    orderSummary();
  })
})
}