
let cart = 0;
let total = 0;

function addToCart(price) {
    cart++;
    total += price;

    document.getElementById("cart").innerText =
        "Cart: " + cart;

    document.getElementById("total").innerText =
        "Total: ₹" + total;
}
