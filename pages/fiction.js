let wishlistStatus = true;
let wishlistAllStatus = true;


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

function wishlistHeart() {
    console.log(wishlistStatus);
    const wishlistElement = document.getElementById('wishlistIconId');

    if(wishlistStatus){
        wishlistElement.src= "./../images/home/heart-red.png";
        wishlistStatus = false;
    }
    else{
        wishlistElement.src= "./../images/home/heart.png";
        wishlistStatus = true;
    }
}

function wishlistHeartAll(imgId){
    console.log(imgId);
    const wishlistElement = document.getElementById(imgId);

    if(wishlistAllStatus){
        wishlistElement.src= "./../images/home/heart-red.png";
        wishlistAllStatus = false;
    }
    else{
        wishlistElement.src= "./../images/home/heart.png";
        wishlistAllStatus = true;
    }
}