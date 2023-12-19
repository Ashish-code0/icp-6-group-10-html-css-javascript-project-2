const quantityElement = document.getElementById("quantity-text");
function increaseQuantity() {
    let quantity = parseInt(quantityElement.innerText);

    if (quantity < 10) {
        quantityElement.innerText = ++quantity;
    }
    else {
        alert("You can't add than 10 items");
    }

}

function decreaseQuantity() {
    let quantity = parseInt(quantityElement.innerText);
    if (quantity > 1) {
        quantityElement.innerText = --quantity;
    }
    else {
        alert("You can't add less than 1 item");
    }
}