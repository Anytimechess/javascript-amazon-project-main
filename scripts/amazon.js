// import { products } from "../data/products";
// import {} from "../images/ratings"
const products=[{
  id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  image: "images/products/athletic-cotton-socks-6-pairs.jpg",
  name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
  rating: {
    stars: 4.5,
    count: 87
  },
  priceCents: 1090,
  keywords: [
    "socks",
    "sports",
    "apparel"
  ]
},
{
  id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
  image: "images/products/intermediate-composite-basketball.jpg",
  name: "Intermediate Size Basketball",
  rating: {
    stars: 4,
    count: 127
  },
  priceCents: 2095,
  keywords: [
    "sports",
    "basketballs"
  ]
},
{
  id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
  image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
  name: "Adults Plain Cotton T-Shirt - 2 Pack",
  rating: {
    stars: 4.5,
    count: 56
  },
  priceCents: 799,
  keywords: [
    "tshirts",
    "apparel",
    "mens"
  ],
  type: "clothing",
  sizeChartLink: "images/clothing-size-chart.png"
},{
  id: "54e0eccd-8f36-462b-b68a-8182611d9add",
  image: "images/products/black-2-slot-toaster.jpg",
  name: "2 Slot Toaster - Black",
  rating: {
    stars: 5,
    count: 2197
  },
  priceCents: 1899,
  keywords: [
    "toaster",
    "kitchen",
    "appliances"
  ]
},]
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
            <select>
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

          <button class="add-to-cart-button button-primary add-to-cart-js">
            Add to Cart
          </button>
        </div>

 `

})
rootElement.innerHTML=htmlCode

let addToCartButtonElement=document.querySelectorAll('.add-to-cart-js');
let cartVariable=0;
// console.log(addToCartButtonElement)
addToCartButtonElement.forEach((btns)=>{
btns.addEventListener("click",()=>{
  cartVariable++;
  document.querySelector('.cart-quantity').innerHTML=cartVariable;
})
})