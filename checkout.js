// Load total from cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let total = 0;

for (let i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].qty;
}

document.getElementById("total-final").innerText = total;


// Show screenshot upload only when "Online Payment" is selected
function toggleSS() {
    let payment = document.getElementById("payment").value;
    let ssBox = document.getElementById("ss-upload");

    if (payment === "online") {
        ssBox.style.display = "block";
    } else {
        ssBox.style.display = "none";
    }
}


// When user clicks Place Order
function placeOrder() {
    let name = document.getElementById("cust-name").value;
    let phone = document.getElementById("cust-phone").value;
    let address = document.getElementById("cust-address").value;

    if (name === "" || phone === "" || address === "") {
        alert("Please fill all the fields!");
        return;
    }

    alert("Your order has been placed successfully!\nThank you for ordering.");

    localStorage.removeItem("cart");

    window.location.href = "index.html"; // back to home
}
