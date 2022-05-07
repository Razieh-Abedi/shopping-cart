//////Add items to the cart///////




document.querySelectorAll(".add-cart-btn").forEach((element) => {
  element.addEventListener("click", (event) => {
    let product = event.target.parentElement.parentElement;
    let pInfo = porductInfo(product);
    let itemCart=document.querySelector(`#ic${product.id}`)

    if (!itemCart) {
      addItem(pInfo);
    } else {
      ++(itemCart.querySelector(".quantity-I-cart").innerText)
    }
    addQuantity();
    
    
   // calculateTotalPrice(pInfo);
  });
});

let totalQuantity = document.getElementById("total-quantity");
function addQuantity() {
  ++totalQuantity.innerText;
}

function subtractProductQuantity() {
  let productQuantity = document.querySelector(".quantity-I-cart");
  totalQuantity.innerText -= productQuantity.innerText;
}

function porductInfo(pr) {
  let productId= pr.id
  let productImg = pr.querySelector(".product-img").src;
  let productName = pr.querySelector(".product-name").innerText;
  let productPrice = pr.querySelector(".product-price").innerText;
  // return {
  //   img: productImg,
  //   name: productName,
  //   price: productPrice,
  // };

  return { 
    productId,
    productImg,
    productName,
    productPrice,
    productQ:1
  }
}

function addItem(pInfo) {
  
  document.querySelector(".bottom-cart").style.display = "flex";
  document.querySelector(".empty-cart").style.display = "none";
  
  let cartItem = `<div id="ic${pInfo.productId}" class="item-list d-flex p-1">
      <div class="ps-2"><img src="${pInfo.productImg}" alt="" class="item-img"/></div>
      <div class="ps-2">${pInfo.productName}</div>
      <div class="ps-2 price-I-cart">${pInfo.productPrice}</div>
      <div class="ps-2 quantity-I-cart">${pInfo.productQ}</div>
      <div class="ps-2 delete-btn"><i class="bi bi-trash text-danger"></i></div>
      </div>`;
  document.querySelector(".cart-items").innerHTML += cartItem;

  setDeleteItem();
  calculateTotalPrice(pInfo);
}
/////////Delete selected items from the cart///////
function setDeleteItem() {
  let deleteBtn = document.querySelectorAll(".delete-btn");
  deleteBtn.forEach((item) => {
    item.addEventListener("click", (event) => {
      let cartItem = event.target.parentElement.parentElement;
      let priceItem = cartItem.querySelector(".price-I-cart").innerText;
      let quantityItem = cartItem.querySelector(".quantity-I-cart").innerText;  
      subtractProductQuantity();
      calculateTotalPrice2(priceItem,quantityItem);
      if (totalQuantity.innerText <= 0) {
        document.querySelector(".bottom-cart").style.display = "none";
        document.querySelector(".empty-cart").style.display = "block";
      }
      cartItem.remove();
      
    });
  });
}
////// Calculate the total price////

let totalPrice = document.querySelector(".total-price");
function calculateTotalPrice(pInfo) {
  let price = pInfo.productPrice.slice(1) * pInfo.productQ;
 totalPrice.innerText =Number(totalPrice.innerText)+ Number(price);
}
function calculateTotalPrice2(priceItem,quantityItem) {
  let price = priceItem.slice(1) * quantityItem;
  totalPrice.innerText =Number(totalPrice.innerText)-Number(price);
}

function sum(pr1,pr2) {
  console.log(arguments);
  let result = pr1+pr2
  return result;
}

let product1=20;
let product2=30;

let s= sum(product1, product2)

console.log(s);