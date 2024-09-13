import { cartList } from "../cart.js";
import { products } from "../../data/products.js";
import { deliveryOptions } from "../updateDeliveryOptions.js";
import {getCartQuantity} from '../cart.js';
import isWeekend from '../date.js'

export function orderSummary()
{
  let productsTotalPrice=0;
  let deliveryShippingPrice=0;
  let totalAmount=0;
  let totalAmountAfterTax=0;
  let tax=0;
cartList.forEach((items)=>{
 let foundItem;
 products.forEach((products)=>{
  if(products.id===items.productId)
  {
    foundItem=products;
  }
 })
 deliveryOptions.forEach((options)=>{
  if(options.id===items.deliveryId)
  {
    deliveryShippingPrice+=options.priceCents;
  }
 })

 if(foundItem)
 {
  productsTotalPrice+=foundItem.priceCents*items.quantity;
 }
})

totalAmount=productsTotalPrice+deliveryShippingPrice;
tax=Math.round(totalAmount*0.1);
totalAmountAfterTax=totalAmount+tax;

let htmlAcc=``;
 
htmlAcc+=`
 <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (${getCartQuantity()}):</div>
            <div class="payment-summary-money">${productsTotalPrice}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">${deliveryShippingPrice}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">${totalAmount}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">${tax}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">${totalAmountAfterTax}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>
`
document.querySelector('.payment-summary').innerHTML=htmlAcc;

}
// orderSummary();
let isWeekendDate=isWeekend('Sunday');
console.log(isWeekendDate)