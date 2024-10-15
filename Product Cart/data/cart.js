
export let cart = []


// JSON.parse(localStorage.getItem('cart'))

// console.log(cart)
// console.log(JSON.parse(localStorage.getItem('cart')))


if (cart===null) {
    cart = [{
        productId: '12345',
        priceCents: 200,
        quantity: 1
    },
    {
        productId: '67899',
        priceCents: 200,
        quantity: 1
    }];
}



function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId, priceCents) {
    let matchingItem;
    // for matching the item..................................
    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
            // this is checking to see if the item is in or not in the cart...
        }
    });

    if (matchingItem) {
        matchingItem.quantity += 1;
        // if the item is in the cart this is adding the quantity ++
    } else {
        cart.push({
            productId: productId,
            priceCents: Number(priceCents),
            quantity: 1
            // above is the push of the cart to an object arr is the item is not in the cart....
        });
        document.querySelector(`.quantity-${productId}`).style.visibility = "hidden"
    }
    saveToStorage();
}

// this function is - the quantity from cart and button.....
export function minsQuantity(productId) {
    let matchingItem;
    // for maching the item..................................
    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
            // this is checking to see if the item is in or not in the cart...
        }
    });

    if (matchingItem.quantity >= 2) {
        matchingItem.quantity -= 1;
        // if the item is in the cart this is minsing the quantity --
    }
}


// this function is for deleting the items from the cart.....
export function removeFromCart(productId) {
    const newCart = []
    cart.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem)

        }
    })
    cart = newCart;
    saveToStorage();
}
