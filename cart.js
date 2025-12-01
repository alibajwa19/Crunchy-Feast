// This function loads the cart items when the cart page opens
function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let box = document.getElementById("cart-items");
    let total = 0;

    box.innerHTML = ""; // clear previous content

    if (cart.length === 0) {
        box.innerHTML = "<p>Your cart is empty.</p>";
        document.getElementById("total-price").innerText = "0";
        return;
    }

    // Show each item
    for (let i = 0; i < cart.length; i++) {
        total = total + (cart[i].price * cart[i].qty);


        box.innerHTML += `
            <div class="item-box">
                <h3>${cart[i].name}</h3>
                <p>RS ${cart[i].price} x ${cart[i].qty} = RS ${cart[i].price * cart[i].qty}</p>
                <button onclick="removeItem(${i})">Remove</button>
            </div>
        `;
    }

    // Show total
    document.getElementById("total-price").innerText = total;
}

// Remove item from cart
function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1); // remove item
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart(); // refresh page
}

// Run loadCart automatically when page opens
window.onload = loadCart;
