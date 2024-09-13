class Cart{

  cartList;
  localStorageKey;

  loadFromStorage(){
  this.cartList=JSON.parse(localStorage.getItem(this.localStorageKey))||[{
      productId:"bc2847e9-5323-403f-b7cf-57fde044a955",
      quantity:1,
      deliveryId:'1'
    }];
  }

  updateCart(productId,quantity){
    let foundItem;
   this.cartList.forEach((cartItems)=>{
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
       this.cartList.push({
          productId,
          quantity,
          deliveryId:'1'
        })
      }
      console.log(cartList);
     this.setCartToLocalStorage();
  }

  getCartQuantity(){
    let quantity=0;
 this.cartList.forEach((items)=>{
   quantity+=items.quantity;
  })
  return quantity;
  }

  setCartToLocalStorage(){
 
    localStorage.setItem("cartItems",JSON.stringify(this.cartList));
  }

  removeItemsFromCart(productId){
    console.log("hi")
    let arr=[];
   arr= this.cartList.filter((cartItems)=>cartItems.productId!==productId)
    console.log(arr);
    this.cartList=arr;
    this.setCartToLocalStorage();
  }

  updateCartNewQuantity(productId,newQunatity)
    {
      let foundItem;
      this.cartList.forEach((cartItems)=>{
        if(cartItems.productId===productId)
        {
          foundItem=cartItems;
        }
      })
      if(foundItem)
      {
        foundItem.quantity=newQunatity;
      }
      this.setCartToLocalStorage();
    }

  updateCartOption(productId,deliveryOptionId){
        let foundItem;
        this.cartList.forEach((items)=>{

          if(productId===items.productId)
          {
            foundItem=items;
          }
        })
        if(foundItem)
        {
          foundItem.deliveryId=deliveryOptionId;
        }
        this.setCartToLocalStorage();
      }
}
let obj= new Cart(); 
console.log(obj)