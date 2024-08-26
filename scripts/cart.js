export let cartList=JSON.parse(localStorage.getItem("cartItems"))||[{
  productId:"bc2847e9-5323-403f-b7cf-57fde044a955",
  quantity:1
}];
// export const updateCart=(productId,quantity)=>{
//   cartList.forEach((values,i)=>{
//     let product=values;
    
//     if(product.productId!==productId&&i===cartList.length-1)
//     {
//       console.log(values.productId);
//       cartList.push({
//         productId,
//         quantity
//        })
//     }
//     if(values.productId===productId)
//     {
//       values.quantity+=quantity;
//     }
//   })

//   if(cartList.length===0){
//    cartList.push({
//     productId,
//     quantity
//    })
//   }
//   // console.log(cartList);
  
//   setCartToLocalStorage();
// }
export const updateCart=(productId,quantity)=>{
  let foundItem;
  cartList.forEach((cartItems)=>{
    if(cartItems.productId===productId)
    {
      foundItem=cartItems;
    }
  
  })
  
  if(foundItem)
    {
      foundItem.quantity+=quantity;
    }
    else{
      cartList.push({
        productId,
        quantity
      })
    }
    console.log(cartList);
    setCartToLocalStorage();
}

export const getCartQuantity=()=>{
let count=Number(JSON.parse(localStorage.getItem("itemsCount")))||0;
cartList.forEach((items)=>{
 count+=items.quantity
})
  localStorage.setItem("itemsCount",JSON.stringify(count))
return count;
}
export const setCartToLocalStorage=()=>{
 
  localStorage.setItem("cartItems",JSON.stringify(cartList));
}
export const removeItemsFromCart=(productId)=>{
  console.log("hi")
  let arr=[];
 arr= cartList.filter((cartItems)=>cartItems.productId!==productId)

  console.log(arr);
  cartList=arr;
  setCartToLocalStorage();
}