import { cart, addToCart, removeFromCart, minsQuantity } from './cart.js';
import { products } from './products.js';
import { formatCurrency } from './money.js';
// ==============================================================
let cartImg = document.createElement("img")
cartImg.setAttribute("src", "./thumbnail/illustration-empty-cart.svg")
cartImg.className = "emptyCartImg"
document.querySelector(".insideCartItems").append(cartImg)
let bottomText = document.createElement("h3")
bottomText.textContent = "Your added items will appear here"
bottomText.className = "bottomText"
document.querySelector(".insideCartItems").append(bottomText)
document.querySelector(".backdropBox").style.visibility = "hidden"
// Above is setting thre empty cart img====================================================
// settimg the html code for added products======
let productsHTML = "";
products.forEach((product) => {
  // settimg the html code for added products======
  productsHTML += `<div class="boxes">
  <img src="${product.image}" alt="" />
  <div class="buttonBox">
    <div class="newBtn-${product.productId}">
      <div id="test3">
        <div class="newMinsBtn-${product.productId}">
          <button id="mins" data-product-Id="${product.productId}" class="js-mins-quantity  mins-${product.productId}">
            <img id="test1" src="./icons/icon-decrement-quantity.svg" alt="" />
          </button>
        </div>
        <div id="quantity1" class="quantity1${product.productId}"></div>
        <div class="newPlusBtn-${product.productId}">
          <button
            id="plus"
            class="js-add-to-cart cart-infotext-${product.productId}"
            data-product-Id="${product.productId}">
            <img id="test2" src="./icons/icon-increment-quantity.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
<div class="quantity-${product.productId}">
      <button
        class="js-add-to-cart cart-infotext-${product.productId}"
        data-product-Id="${product.productId}"
        data-product-Img="${product.image}"
        data-product-Price="${product.PriceCents}">
        <img
          class="addToCartImgInsideButton"
          id="pics"
          src="./icons/icon-add-to-cart.svg"
          alt=""
        />Add to Cart
      </button>
    </div>
  </div>
  <small class="smallName">${product.ProductSmall}</small>
  <h3 class="productName">${product.ProductName}</h3>
  <div class="bottomtextprice">
  <div class="PriceNameText">Price:</div>
  <div class="productPrice">$${formatCurrency(product.PriceCents)}</div>
 
</div>
  </div>

`;
})
// ======================================================================
document.querySelector(`.js-info #mainBoxes`).innerHTML = productsHTML;
// above is making the product boxes and placing them----------
// this function is for deleting the items from cart and - the money
function deltQuantity() {
  let grandTotal = "";
  let cartQuantity = 0;
  let sumTotal = 0;
  cart.forEach((cartItem) => {
    let minscartQuantity = cartQuantity += cartItem.quantity;
    minscartQuantity--
    cartItem.quantity
    sumTotal += cartItem.priceCents * cartItem.quantity
    grandTotal = ` <div class="totalText">Order Total:</div>
            <div class="totalNum">$${formatCurrency(sumTotal)}</div>`
    document.querySelector(".grandTotal").innerHTML = grandTotal;
    // updating the cart quantity--
  });
  if (cartQuantity === 0) {
    // this is re setting the img and text for cart empty
    document.querySelector(".insideCartItems").append(cartImg)
    document.querySelector(".insideCartItems").append(bottomText)
    document.querySelector(".grandTotal").innerHTML = "";
    document.querySelector(".confirmOrder").style.visibility = "hidden";
  }
  document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
}
// this function below is for ++ quantity------below---------------
function upDateCartQuantity() {
  let grandTotal = "";
  let cartQuantity = 0;
  let sumTotal = 0
  let btnQu = "";
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
    sumTotal += cartItem.priceCents * cartItem.quantity
    grandTotal = ` <div class="totalText">Order Total:</div>
            <div class="totalNum">$${formatCurrency(sumTotal)}</div>`
    document.querySelector(".grandTotal").innerHTML = grandTotal;
    btnQu = ` <div class="quantity1${cartItem.productId}">${cartItem.quantity}</div>`;
    document.querySelector(`.quantity1${cartItem.productId}`).innerHTML = btnQu;
  });
  // above is the quantity for the cart------------------------------------
  document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
  // Above is setting the quantity to cart icon.................
}
// this function is for -- quantity -----------below------------------
function minsupDateCartQuantity() {
  let cartQuantity = 0;
  let grandTotal = "";
  let sumTotal = 0
  let btnQu = "";
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
    sumTotal += cartItem.priceCents * cartItem.quantity
    grandTotal = ` <div class="totalText">Order Total:</div>
            <div class="totalNum">$${formatCurrency(sumTotal)}</div>`
    document.querySelector(".grandTotal").innerHTML = grandTotal;
    btnQu = ` <div class="quantity1${cartItem.productId}">${cartItem.quantity}</div>`;
    document.querySelector(`.quantity1${cartItem.productId}`).innerHTML = btnQu;
  });
  // above is the quantity for the cart------------------------------------
  document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
  // Above is setting the quantity to cart icon.................
}
// this function is for displaying the html for cart----------------
function showingHtmlInCart() {
  let cartSummarytHTML = "";
  cart.forEach((cartItem) => {
    const productId = cartItem.productId;
    let matchingProduct;
    products.forEach((product) => {
      if (product.productId === productId) {
        matchingProduct = product;
        // these foreach are checking to see in item is in cart or not if so the quantity is updated or its added to cart....
      }
    })
    // below is the items in the cart html code..........................................
    cartSummarytHTML += `<div class="infotext cart-infotext-${matchingProduct.productId}">
    <div class="NameInfo">
      <div class="Name">${matchingProduct.ProductName}</div>
    </div>
    <div class="priceInfo">
      <div  class="quantity">${cartItem.quantity}x</div>
      <div class="atsy">@</div>
      <div class="price">$${formatCurrency(matchingProduct.PriceCents)}</div>
      <div class="total data-sum-total">
        $${(formatCurrency(matchingProduct.PriceCents) *
        cartItem.quantity).toFixed(2)}
        </div>
        <div class="delbtn">
        <button class="removebtn" data-product-id="${matchingProduct.productId}">
        <img src="./icons/icon-remove-item.svg" class="removebtnImg" alt="" />
        </button>
        </div>
        </div>
        <div class="confirmOrder"></div>
        </div>`;
    // below is the button and text when the cart has an item in it.............................
    document.querySelector(".confirmOrder").innerHTML = `<div class="carbinImgbox">
        <div class="carbinImg">
        <div class="carbinText"><h3 class="carbonText">This is a Carbon-neutral delivery</h3></div>
        <img src="./icons/icon-carbon-neutral.svg" class="carbinPic" alt="" />
        </div>
        </div>
        <div class="confirmBtnBox">
        <div class="confirmBtn"><button class ="btnConfirm" >Confirm Order</button></div>
        </div>`
    document.querySelector(".allInfo").innerHTML = cartSummarytHTML;
    //  above is also the html for the delet button--------------------------------
    document.querySelector(".btnConfirm").addEventListener("click", () => {
      // this button is for confirm order button and to place in conformation box......................
      document.querySelector(".backdropBox").style.visibility = "visible"
      let cartSummarytHTML1 = "";
      cart.forEach((cartItem) => {
        const productId = cartItem.productId;
        let matchingProduct;
        products.forEach((product) => {
          if (product.productId === productId) {
            matchingProduct = product;
          }
        })
        // below is the html for the cart with the items and tatol of price..................
        cartSummarytHTML1 += `<div class="allTextconfirm">
        <div class="boxPic">
          <img class="confirmpic" src="${matchingProduct.image}" alt="" />
        </div>
         <div class="mainBoxText">
          <div class="infotext cart-infotext-${matchingProduct.productId}">
            <div class="NameInfo">
              <div class="Name">${matchingProduct.ProductName}</div>
            </div>
            <div class="priceInfo">
              <div id="boxQuantity" class="quantity">${cartItem.quantity}x</div>
              <div class="atsy">@</div>
              <div class="price">
                $${formatCurrency(matchingProduct.PriceCents)}
              </div>
              <div class="total data-sum-total">
                $${(formatCurrency(matchingProduct.PriceCents) *
            cartItem.quantity).toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      </div>`;
        //below is the main box the pops up html and pics of items and total price............................
        document.querySelector(".confirmOrderMainBox").innerHTML = cartSummarytHTML1;
        let grandTotal = "";
        let cartQuantity = 0;
        let sumTotal = 0
        cart.forEach((cartItem) => {
          cartQuantity += cartItem.quantity;
          sumTotal += cartItem.priceCents * cartItem.quantity
          grandTotal = `<div class="totalBoxFinal">
          <div class="textTotal">Order Total:</div>
          <div class="Totalnum">$${formatCurrency(sumTotal)}</div></div>`
          document.querySelector(".boxTotal").innerHTML = grandTotal;
        });
      })
      //below is same as above......................................................................
      document.querySelector(".finshedheadText").innerHTML = `<div class="headerText">
      <div class ="imgDivConfirm"><img src="./icons/icon-order-confirmed.svg" alt="" class="checkBoxPic" /></div>
      </div>
      <div>
      <div>
        <h3 class="h3TextConfirm">Order Confirmed</h3>
      </div>
      <div><small>We hope you enjoy your food!</small></div>
      </div>`;
      // below is the start new order button on the pop up page...............................................
      document.querySelector(".startneworderbtn").innerHTML = `<button class="NewOrderButton">Start New Order</button>`
      // below is the start new order button and to start a new order....................................................
      document.querySelectorAll(".removebtn").forEach((link) => {
        // this is the remove items from cart button......................................
        document.querySelector(".NewOrderButton").addEventListener("click", () => {
          // this is clearing the cart and all info to start a new order
          document.querySelector(".allInfo").innerHTML = "";
          const productId = link.dataset.productId;
          removeFromCart(productId);
          const container = document.querySelector(`.cart-infotext-${productId}`);
          container.remove();
          deltQuantity()
          document.querySelector(`.quantity-${productId}`).style.visibility = "visible"
          document.querySelector(`.newBtn-${productId}`).style.visibility = "hidden"
          document.querySelector(".backdropBox").style.visibility = "hidden"
          document.querySelector(".insideCartItems").append(cartImg)
          document.querySelector(".insideCartItems").append(bottomText)
          document.querySelector(".grandTotal").innerHTML = "";
          document.querySelector(".confirmOrder").style.visibility = "hidden";

        })
      })
    })
    document.querySelectorAll(".removebtn").forEach((link) => {
      // this is the remove item from cart button......................................
      link.addEventListener("click", () => {
        const productId = link.dataset.productId;
        removeFromCart(productId);
        const container = document.querySelector(`.cart-infotext-${productId}`);
        container.remove();
        deltQuantity()
        document.querySelector(`.quantity-${productId}`).style.visibility = "visible"
        document.querySelector(`.newBtn-${productId}`).style.visibility = "hidden"
      })
    })
  })
}
// below is for the + button======================================
document.querySelectorAll(".js-add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId
    const priceCents = button.dataset.productPrice
    document.querySelector(`.newBtn-${productId}`).style.visibility = "visible"
    document.querySelector(".confirmOrder").style.visibility = "visible";
    // these const are grabbing the data tag from the button
    addToCart(productId, priceCents)
    upDateCartQuantity()
    cartImg.remove()
    bottomText.remove()
    showingHtmlInCart()
  });
});
// below is the - button ----------------------------------
document.querySelectorAll(".js-mins-quantity").forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId
    // these const are grabbing the data tag from the button
    minsQuantity(productId)
    minsupDateCartQuantity()
    showingHtmlInCart()
  });
});

