const addToCartButtons = document.querySelectorAll('.buy-now');
const cartList = document.querySelector('.cart-list');
const totalPriceEl = document.getElementById('total');

addToCartButtons.forEach(button => {
    button.addEventListener('click', function (event) {
        const book = this.parentNode.parentNode;
        const bookName = book.querySelector('h3').textContent;
        const bookPrice = parseFloat(book.querySelector('.price').textContent.slice(1));

        const cartItem = document.createElement('li');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `<img src="../images/novel/book.png" alt="${bookName}">
                 <span>${bookName}</span>
                 <span class="price">$${bookPrice.toFixed(2)}</span>
                 <button class="remove-from-cart">Remove</button>`;

        cartList.appendChild(cartItem);

        updateTotalPrice(bookPrice);

        const removeButton = cartItem.querySelector('.remove-from-cart');
        removeButton.addEventListener('click', function () {
            cartList.removeChild(cartItem);
            updateTotalPrice(-bookPrice);
        });
    });
});

function updateTotalPrice(price) {
    const currentTotal = parseFloat(totalPriceEl.textContent);
    totalPriceEl.textContent = (currentTotal + price).toFixed(2);
}