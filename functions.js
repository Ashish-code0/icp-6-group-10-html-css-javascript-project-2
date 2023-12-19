let bookName;
let searchStatus = true;
let totalPrice;
let quantity;

/* take input form the search bar in home page and store in bookName */
function searchBook(){
    const searchedBook = document.getElementById('search-book');
    bookName = searchedBook.value;
    console.log(`Book searched : ${bookName}`);

}

/* Change display property of searched section and display on the home page*/
function showBook(bookName){
    const searchCardDisplay = document.getElementById('hidden-search-id');

    if(searchStatus){
        searchCardDisplay.style.display = "block";
        searchStatus = false;
    }
    else{
        searchCardDisplay.style.display = "none"; 
        searchStatus = true;
    }

    const bookImgId = document.getElementById('book-img-id');
    const bookNameId = document.getElementById('book-name-id');
    const bookPriceId = document.getElementById('book-price-id');
    
    switch(bookName){
        case 'atomic':
            bookImgId.src="./images/personality/atomic-habit.jpeg";
            bookNameId.innerText = 'Atomic Habits Paperback _ 1 January 2018';
            bookPriceId.innerText = '600/-';
        break;
        case 'ikigai':
            bookImgId.src="./images/personality/ikigai.jpeg"
            bookNameId.innerText = 'Ikigai: The Japanese Secret to a Long and Happy Life';
            bookPriceId.innerText = '499/-';
        break;
        case 'psychology':
            bookImgId.src="./images/personality/psychology-of-money.jpg";
            bookNameId.innerText = 'The Psychology Of Money Paperback _ 1 September 2020';
            bookPriceId.innerText = '550/-';
        break;
        case 'rich':
            bookImgId.src="./images/personality/rich-dad-poor-dad.jpeg";
            bookNameId.innerText = 'Rich Dad Poor Dad: 25th Anniversary Edit';
            bookPriceId.innerText = '400/-';
        break;
        case 'think':
            bookImgId.src="./images/personality/think-and-grow-rich.png";
            bookNameId.innerText = 'Think and Grow Rich: The Landmark Bestseller';
            bookPriceId.innerText = '649/-';
        break;
        case 'divine':
            bookImgId.src="./images/fiction/divine-rivals.png";
            bookNameId.innerText = 'Divine Rivals: A Novel: 1 (Letters of Enchantment, 1)';
            bookPriceId.innerText = '500/-';
        break;
        case 'fire':
            bookImgId.src="./images/fiction/fire-blood.jpeg";
            bookNameId.innerText = 'Fire And Blood: A Song Of Ice And Fire: Book One:';
            bookPriceId.innerText = '300/-';
        break;
        case 'game':
            bookImgId.src="./images/fiction/game-of-thrones.jpeg";
            bookNameId.innerText = 'A Game of Thrones: A Song of Ice and Fire: Book One: 1';
            bookPriceId.innerText = '700/-';
        break;
        case 'fourth':
            bookImgId.src="./images/fiction/fourth-wing.png";
            bookNameId.innerText = 'Fourth Wing: The Empyrean Discover the Instant';
            bookPriceId.innerText = '499/-';
        break;
        case 'iron':
            bookImgId.src="./images/fiction/iron-flame.jpg";
            bookNameId.innerText = 'Iron Flame: The Sequel of Fourth Wing';
            bookPriceId.innerText = '499/-';
        break;
    }

    /*
    if ( bookName = 'psychology'){
        bookImgId.src="./images/personality/psychology-of-money.jpg";
        bookNameId.innerText = 'Atomic Habits Paperback _ 1 January 2018';
        bookPriceId.innerText = '600/-';
    }
    else if( bookName ='atomic'){
        bookImgId.src="./images/personality/atomic-habit.jpeg";
        bookNameId.innerText = 'Atomic Habits Paperback _ 1 January 2018';
        bookPriceId.innerText = '600/-';
    }
    else if ( bookName = 'rich'){
        bookImgId.src="./images/personality/rich-dad-poor-dad.jpeg";
        bookNameId.innerText = 'Rich Dad Poor Dad: 25th Anniversary Edit';
        bookPriceId.innerText = '400/-';
    }
    else if ( bookName = 'think'){
        bookImgId.src="./images/personality/think-and-grow-rich.jpg";
        bookNameId.innerText = 'Atomic Habits Paperback _ 1 January 2018';
        bookPriceId.innerText = '600/-';
    }
    else if ( bookName = 'divine'){
        bookImgId.src="./images/fiction/divine-rivals.jpg";
        bookNameId.innerText = 'Atomic Habits Paperback _ 1 January 2018';
        bookPriceId.innerText = '600/-';
    }
    else if ( bookName = 'fire'){
        bookImgId.src="./images/fiction/fire-blood.jpeg";
        bookNameId.innerText = 'Atomic Habits Paperback _ 1 January 2018';
        bookPriceId.innerText = '600/-';
    }
    else if ( bookName = 'fourth'){
        bookImgId.src="./images/fiction/fourth-wing.jpg";
        bookNameId.innerText = 'Atomic Habits Paperback _ 1 January 2018';
        bookPriceId.innerText = '600/-';
    }
    else if ( bookName = 'iron'){
        bookImgId.src="./images/fiction/iron-flame.jpg";
        bookNameId.innerText = 'Atomic Habits Paperback _ 1 January 2018';
        bookPriceId.innerText = '600/-';
    }
    else if ( bookName = 'song'){
        bookImgId.src="./images/fiction/song-of-ice-fire.jpeg";
        bookNameId.innerText = '';
        bookPriceId.innerText = '600/-';
    }
    else{
        bookImgId.src="./images/personality/ikigai.jpeg"
        bookNameId.innerText = 'Ikigai: The Japanese Secret to a Long and Happy Life';
        bookPriceId.innerText = '499/-';
    }   
    */
    
    console.log(bookImgId.src);
    console.log(bookNameId.innerText);      
    console.log(bookPriceId.innerText);  
}
/* Close the searched secton */
function closeSearch(){
    const searchCardDisplay = document.getElementById('hidden-search-id');
    if(searchStatus){
        searchCardDisplay.style.display = "block";
        searchStatus = false;
    }
    else{
        searchCardDisplay.style.display = "none"; 
        searchStatus = true;
    }
}

/* Interpage communication error */
function addToCart(cartAddBookName){
    

        const hiddenSection = document.getElementById('cart-hidden-section');
        hiddenSection.style.display = "block";

        const imgElement = document.getElementById('cart-book-img-id');
        const nameElement = document.getElementById('cart-books-name-id');
        const priceElement = document.getElementById('priceBook');

        switch(cartAddBookName){
            case 'atomic':
                imgElement.src="./images/personality/atomic-habit.jpeg";
                nameElement.innerText = 'Atomic Habits Paperback _ 1 January 2018';
                priceElement.innerText = '600/-';
            break;
            case 'ikigai':
                imgElement.src="./images/personality/ikigai.jpeg"
                nameElement.innerText = 'Ikigai: The Japanese Secret to a Long and Happy Life';
                priceElement.innerText = '499/-';
            break;
            case 'psychology':
                imgElement.src="./images/personality/psychology-of-money.jpg";
                nameElement.innerText = 'The Psychology Of Money Paperback _ 1 September 2020';
                priceElement.innerText = '550/-';
            break;
            case 'rich':
                imgElement.src="./images/personality/rich-dad-poor-dad.jpeg";
                nameElement.innerText = 'Rich Dad Poor Dad: 25th Anniversary Edit';
                priceElement.innerText = '400/-';
            break;
            case 'think':
                imgElement.src="./images/personality/think-and-grow-rich.png";
                nameElement.innerText = 'Think and Grow Rich: The Landmark Bestseller';
                priceElement.innerText = '649/-';
            break;
            case 'divine':
                imgElement.src="./images/fiction/divine-rivals.png";
                nameElement.innerText = 'Divine Rivals: A Novel: 1 (Letters of Enchantment, 1)';
                priceElement.innerText = '500/-';
            break;
            case 'fire':
                imgElement.src="./images/fiction/fire-blood.jpeg";
                nameElement.innerText = 'Fire And Blood: A Song Of Ice And Fire: Book One:';
                priceElement.innerText = '300/-';
            break;
            case 'game':
                imgElement.src="./images/fiction/game-of-thrones.jpeg";
                nameElement.innerText = 'A Game of Thrones: A Song of Ice and Fire: Book One: 1';
                priceElement.innerText = '700/-';
            break;
            case 'fourth':
                imgElement.src="./images/fiction/fourth-wing.png";
                nameElement.innerText = 'Fourth Wing: The Empyrean Discover the Instant';
                priceElement.innerText = '499/-';
            break;
            case 'iron':
                imgElement.src="./images/fiction/iron-flame.jpg";
                nameElement.innerText = 'Iron Flame: The Sequel of Fourth Wing';
                priceElement.innerText = '499/-';
            break;
        }
        console.log('Cart book name',cartAddBookName);
}

/* decrease quantity in cart  */
function decreaseQuantity(){
    const countElement = document.getElementById('quantity');
    quantity = parseInt(countElement.innerText);
    if(quantity > 1){
        countElement.innerText = --quantity;
    } else
    {
        alert('Can not buy less than 1');
    }
}

/* increase quantity in cart*/
function increaseQuantity(){
    const countElement = document.getElementById('quantity');
    quantity = parseInt(countElement.innerText);
    if(quantity < 5){
        countElement.innerText = ++quantity;
    } else
    {
        alert('You can not buy more than 5 products at once');
    }   
}
 
/* Counts total price */
function countTotal(){
    const priceElement = document.getElementById('priceBook');

    const tempPrice = parseInt(priceElement.innerText);
    console.log(`Book Price is : ${tempPrice}`);

    totalPrice = (quantity * tempPrice);
    console.log(`Total price is : ${totalPrice}`);

    const totalPriceElement = document.getElementById('totalPriceDisplay');

    if(totalPrice < 300){
        console.log('Discount is liable for purchase below 300/- ');
    }
    else if(totalPrice > 300 && totalPrice <= 1000){
        totalPrice -= (totalPrice*0.05);
        console.log(`Toatl price after 5 % discount is : ${totalPrice}`);
    }
    else if(totalPrice > 1000 && totalPrice <= 1500){
        totalPrice -= (totalPrice*0.10)
        console.log(`Toatl price after 10 % discount is : ${totalPrice}`);
    }
    else if( totalPrice > 1500 && totalPrice <= 2500){
        totalPrice -= (totalPrice*0.15)
        console.log(`Toatl price after 15 % discount is : ${totalPrice}`);
    }
    else{
        totalPrice -= (totalPrice*0.20)
        console.log(`Toatl price after 20 % discount is : ${totalPrice}`);
    }
    totalPriceElement.innerText = Math.floor(totalPrice);
}